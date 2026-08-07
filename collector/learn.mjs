#!/usr/bin/env node
/**
 * Pull the live reviews and turn them into a learning digest.
 *
 * The review server only stores ids ("F0806-30"). On its own that teaches nothing.
 * This joins those ids back to the actual finds so the collector can see WHAT was
 * rejected — the brand, territory, tags and design note — and look for what the
 * rejected things have in common.
 *
 *   node inspiration/learn.mjs            # human-readable digest
 *   node inspiration/learn.mjs --json     # machine-readable
 *
 * Run at the START of every collector run. Nothing is written here — this only
 * reads and reports. Claude decides what becomes a rule.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const API = "https://fk-board.ladana.workers.dev";
const REASONS = {
  plain:"Too plain", busy:"Too busy / no hierarchy", cheap:"Looks cheap / flat vector",
  generic:"Generic — seen everywhere", process:"Wrong process — not sublimated",
  womens:"Women's product", recolour:"Recolour, not a new design",
  offbrand:"Off-brand for FK", type:"Bad type", quality:"Image too poor to judge",
};
const RULE_THRESHOLD = 3;   // one reject is an opinion; three sharing a reason is a rule

function loadFinds(){
  const src = fs.readFileSync(path.join(HERE, "board/finds.js"), "utf8");
  const g = {}; new Function("window", src)(g);
  return g.FINDS || [];
}

async function loadReviews(){
  try{
    const r = await fetch(API + "/reviews", { signal: AbortSignal.timeout(12000) });
    if(!r.ok) throw new Error("HTTP " + r.status);
    return { source:"server", data: await r.json() };
  }catch(e){
    // Fall back to a saved copy so a run is never blocked by the network.
    const local = path.join(HERE, "picks/reviews.json");
    if(fs.existsSync(local))
      return { source:"local copy (server unreachable: " + e.message + ")",
               data: JSON.parse(fs.readFileSync(local,"utf8")) };
    return { source:"none (server unreachable: " + e.message + ")", data: [] };
  }
}

/* What do a group of finds have in common? That shared attribute is the rule. */
function commonality(items){
  const count = (vals) => vals.reduce((a,v)=>(a[v]=(a[v]||0)+1,a),{});
  const top = (obj, min) => Object.entries(obj)
    .filter(([,n]) => n >= min).sort((a,b)=>b[1]-a[1]);
  const min = Math.max(2, Math.ceil(items.length * 0.5));
  return {
    territory: top(count(items.map(f=>f.territory).filter(Boolean)), min),
    lane:      top(count(items.map(f=>f.lane).filter(Boolean)), min),
    brand:     top(count(items.map(f=>f.brand).filter(Boolean)), min),
    tier:      top(count(items.map(f=>f.tier||"curated")), min),
    tags:      top(count(items.flatMap(f=>f.tags||[])), min),
  };
}

const finds = loadFinds();
const byId = Object.fromEntries(finds.map(f=>[f.id,f]));
const { source, data } = await loadReviews();

// newest entry per reviewer wins
const latest = {};
for(const e of data){
  if(e && e.who && (!latest[e.who] || (e.at||"") >= (latest[e.who].at||""))) latest[e.who] = e;
}
const reviewers = Object.keys(latest);

const keptBy = {}, rejBy = {};
for(const [who,e] of Object.entries(latest)){
  keptBy[who] = (e.s||[]).map(id=>byId[id]).filter(Boolean);
  rejBy[who]  = Object.entries(e.r||{}).map(([id,reason])=>({find:byId[id], reason}))
                 .filter(x=>x.find);
}
const allKeptIds = new Set(Object.values(latest).flatMap(e=>e.s||[]));
const bothKept = reviewers.length > 1
  ? [...allKeptIds].filter(id => reviewers.every(w => (latest[w].s||[]).includes(id)))
  : [];
const disagreed = [];
if(reviewers.length > 1){
  for(const a of reviewers) for(const b of reviewers){
    if(a===b) continue;
    for(const id of (latest[a].s||[]))
      if((latest[b].r||{})[id]) disagreed.push({id, keptBy:a, rejectedBy:b, reason:latest[b].r[id]});
  }
}

/* Group rejects by reason. Wildcards are excluded from rule-forming entirely — they
   are deliberate shots in the dark, and letting them narrow a territory would defeat
   the whole point of having them. See SEEDS.md. */
const byReason = {}, wildRejects = [];
for(const [who,list] of Object.entries(rejBy))
  for(const {find,reason} of list){
    if(find.wildcard){ wildRejects.push({...find, reason, rejectedBy:who}); continue; }
    (byReason[reason] = byReason[reason] || []).push({...find, rejectedBy:who});
  }

if(process.argv.includes("--json")){
  console.log(JSON.stringify({source, reviewers, bothKept, disagreed,
    kept:keptBy, rejectedByReason:byReason}, null, 1));
  process.exit(0);
}

const line = "─".repeat(70);
console.log("\nLEARNING DIGEST");
console.log("reviews from: " + source);
console.log("finds on board: " + finds.length + " · reviewers: " + (reviewers.join(", ") || "none yet"));

if(!reviewers.length){
  console.log("\nNo reviews yet. Run as normal; there is nothing to learn from.\n");
  process.exit(0);
}

console.log("\n" + line + "\nKEPT\n" + line);
for(const [who,list] of Object.entries(keptBy)){
  console.log(`\n${who} kept ${list.length}:`);
  list.forEach(f => console.log(`  ${f.id}  ${f.title}  [${f.territory} · ${f.tier||"curated"} · ${f.score}/6]`));
  if(list.length >= 2){
    const c = commonality(list);
    const notes = Object.entries(c).filter(([,v])=>v.length)
      .map(([k,v])=>`${k}: ${v.map(([n,c2])=>`${n} ×${c2}`).join(", ")}`);
    if(notes.length) console.log("   shared: " + notes.join(" | "));
  }
}
if(bothKept.length) console.log("\n★ BOTH KEPT (strongest signal): " + bothKept.join(", "));

console.log("\n" + line + "\nREJECTED — grouped by reason\n" + line);
const promote = [];
for(const [reason,items] of Object.entries(byReason).sort((a,b)=>b[1].length-a[1].length)){
  const hit = items.length >= RULE_THRESHOLD;
  if(hit) promote.push(reason);
  console.log(`\n${REASONS[reason]||reason}  ×${items.length}${hit ? "   <<< BECOMES A RULE" : ""}`);
  items.forEach(f => console.log(`  ${f.id}  ${f.title} — ${f.brand}`));
  if(items.length >= 2){
    const c = commonality(items);
    const notes = Object.entries(c).filter(([,v])=>v.length)
      .map(([k,v])=>`${k}: ${v.map(([n,c2])=>`${n} ×${c2}`).join(", ")}`);
    if(notes.length) console.log("   shared: " + notes.join(" | "));
    else console.log("   shared: nothing obvious — the reason itself is the rule");
  }
}

if(disagreed.length){
  console.log("\n" + line + "\n⚠ DISAGREEMENT — do NOT turn into a rule, raise it in the brief\n" + line);
  disagreed.forEach(d => console.log(`  ${d.id}  ${d.keptBy} kept · ${d.rejectedBy} rejected (${REASONS[d.reason]||d.reason})`));
}

if(wildRejects.length){
  console.log("\n" + line + "\n◇ WILDCARDS REJECTED — logged only, never a rule\n" + line);
  wildRejects.forEach(f => console.log(`  ${f.id}  ${f.title} (${REASONS[f.reason]||f.reason})`));
  console.log("  Shots in the dark that missed. They narrow nothing. Keep firing.");
}

console.log("\n" + line + "\nACTIONS FOR THIS RUN\n" + line);
if(promote.length){
  console.log("Promote to standing filters in REJECTS.md, and say so in the brief.");
  console.log("SCOPE EACH ONE TO THE NARROWEST EVIDENCE — see the shared attributes above.");
  console.log("A rejection means the EXECUTION was wrong, never that the direction is closed.");
  console.log("Only Ladana or James, in words, can close a direction.\n");
  promote.forEach(r => {
    const items = byReason[r];
    const c = commonality(items);
    const where = [c.lane[0] && "lane "+c.lane[0][0], c.tier[0] && c.tier[0][0]+" tier",
                   c.territory[0] && c.territory[0][0]].filter(Boolean).join(" / ");
    console.log("  · " + (REASONS[r]||r) + (where ? "  — scope it to: " + where : "  — no shared attribute; the reason itself is the rule"));
  });
} else {
  console.log("No reason hit " + RULE_THRESHOLD + " yet — log the rejects, promote nothing.");
}
/* Convergence check. If everything kept sits in one territory, the tool is starting to
   mirror existing taste rather than research. That is a failure state, not a success. */
const keptAll = Object.values(keptBy).flat();
if(keptAll.length >= 4){
  const terr = keptAll.reduce((a,f)=>(a[f.territory]=(a[f.territory]||0)+1,a),{});
  const [topT, topN] = Object.entries(terr).sort((a,b)=>b[1]-a[1])[0] || [];
  if(topN / keptAll.length > 0.7){
    console.log("\n⚠ CONVERGENCE WARNING: " + topN + " of " + keptAll.length +
      " keepers are '" + topT + "'.");
    console.log("  Do NOT reweight further toward it. Push the exploration quota UP this run");
    console.log("  and chase an unexplored seed from SEEDS.md. The job is to widen the field,");
    console.log("  not to get better at agreeing with what has already been liked.");
  }
}

const rejCount = Object.values(byReason).reduce((a,b)=>a+b.length,0);
const harvestish = ["process","womens","recolour"].reduce((a,r)=>a+(byReason[r]?.length||0),0);
const barish     = ["plain","cheap","generic"].reduce((a,r)=>a+(byReason[r]?.length||0),0);
if(rejCount){
  if(harvestish/rejCount > 0.5) console.log("\nDIAGNOSIS: mostly harvest failures — fix SOURCES.md filters, not the quality bar.");
  else if(barish/rejCount > 0.5) console.log("\nDIAGNOSIS: mostly quality failures — the premium bar is set too low. Raise it.");
  else if((byReason.offbrand?.length||0)/rejCount > 0.4) console.log("\nDIAGNOSIS: territory assignment is being fudged. Re-check against BENCHMARK.md.");
}
console.log("");
