# Inspiration Collector — Source Register

> ### ⚠️ `PURPOSE.md` overrules this file
> **A mood board for Future Kimonos rash guard design, filled automatically instead of by hand.**
> Its job is to save Ladana and James time researching design inspiration.
> Run → 20–30 findings → they ★ keep or ✕ cut with a reason → those marks teach the next run.
> **One flat board. No tiers.** This file is *guidance on where to look*, never a specification
> of what to find. If anything below contradicts `PURPOSE.md`, `PURPOSE.md` wins.


Edit this file to change what the collector watches. Read at the start of every run alongside `TASTE.md` and `REJECTS.md`.

**Restructured 6 August 2026 (second restructure).** The first restructure moved from BJJ-first to sport-first. That was still wrong. The register was a list of `products.json` endpoints, and **a product feed returns the average of a catalogue by construction** — which is exactly what round two put on the board.

The register is now organised by **design territory**, and product feeds are demoted to a verification tool rather than a discovery tool. Premium design does not live in a catalogue endpoint. It lives in editorial, art direction, team kit launches, and work designers publish deliberately.

---

## The two rules that govern everything

**1. Construction decides the class.** `buildable` = all-over dye-sublimated onto synthetic technical cloth. `reference` = the artwork itself, shown as artwork rather than as a shoppable product. Everything else is prose. Full statement in `TASTE.md`.

**2. The premium bar decides whether it exists at all.** Six tests, 4+ to reach the board. Nothing scoring 3 or below is filed in any lane. `TASTE.md` → *The premium bar*.

The practical version: a motocross jersey and a rash guard are the same manufacturing problem. A cotton tee is not. And a boring motocross jersey is still boring.

---

## The two negative musts

**Added 7 Aug 2026. These are things the collector must never do, regardless of how good the finds are.**

### 1. No single brand may dominate a run

**Cap any one brand at roughly 4 finds per run, and any one *source method* at roughly a third.**

The failure this prevents: Venum is the closest aesthetic match in the register and has 69 relevant products. Left alone, a run would return a Venum catalogue. The board would look excellent and teach nothing, because every find would share one art director's assumptions.

If a brand is producing so much good work that the cap bites, that is itself the finding — **say it in the brief** rather than quietly filling the board with them.

Run 3 breached the spirit of this: 6 of 6 curated finds came from one source method (museum open-access) and two artists. Better than run 2, still too narrow.

### 2. Every reference find must stay citable

**Never file an image whose origin cannot be named and linked.**

Reference-class finds are other people's work. Each carries a working source link and, where known, the artist's name. The note describes the *mechanic* — the composition, the palette relationship, the type hierarchy — never "copy this".

This is not bureaucracy. A find whose origin has been lost cannot be verified, cannot be licensed if it ever mattered, and cannot be traced back when someone asks six months later where an idea came from. **If the source cannot be established, drop the find.** There is always another.

---

## Lane weighting

**A run is 20–30 findings** (`PURPOSE.md`). This is roughly how they should be spread — a shape, not a quota.

| Rough share of a run | Lane |
|---|---|
| ~a quarter | Lane 3 — reference-class artwork across the six territories |
| ~a fifth | Lane 1 — motorsport, MX, MTB, cycling |
| ~a fifth | Lane 5 — BJJ competitors, incl. 5b event-led, 5c collab, 5d retailer. **Venum every run** |
| ~a sixth | Lane 2 — combat sports beyond BJJ |
| ~a tenth | Lane 4 — athletes |
| ~a third of the run | **Exploration** — ~2 wildcards + ~1 seed chased (`SEEDS.md`). Overlaps the lanes above |
| written only | Lanes 6–7 — macro direction, consumer voice |

**These are proportions, not slots.** Twenty-two good findings beats thirty padded ones, and an empty lane with an honest explanation beats a filled one. The two negative musts above outrank this table: no brand over ~4, no source method over about a third.

---

## Feed handling — read before fetching anything

Feeds are now used to **verify and date** a find that editorial or search surfaced, not to discover finds. Never open a run by pulling a catalogue.

- **Always fetch inside a subagent.** Feeds run 16–77 KB and will flood the main context. The subagent returns a compact table only, never raw JSON.
- **`mcp__workspace__web_fetch` only.** Never bash, curl, wget or python. If the fetcher refuses a domain, record it and move on — do not route around it.
- **`?limit=1` does not return the newest product.** Confirmed 6 Aug 2026: Ornot returned a 2023 bottle, Seven MX a 2023 pant, Coeur a 2024 tank. Shopify's default feed order is not recency. Use `?limit=250` and sort on `published_at` yourself. `?limit=1` is a liveness test only.
- **Sort by `published_at`, not `created_at`** — they diverge by months.
- **`published_at` lies.** Brands bulk-republish old stock and it surfaces looking new. Confirmed: Kingz republished 2022–23 items tagged `sale`; Tatami's "Washed" caps carried an August 2026 timestamp on October 2024 photography at £8 against £20 RRP; FUJI republished its entire catalogue second-by-second on 3 Aug 2026 on 2019 imagery; FK's own February 2026 timestamps are republishes. **Before calling anything a new drop, open the product page and check the image `?v=` timestamp and whether it is discounted against RRP.**
- **Provenance constraint.** `web_fetch` sometimes refuses with *"URL not in provenance set"* — it only retrieves URLs that appeared in a user message, a prior fetch result, or a WebSearch result. Workaround: web-search the brand first to surface product URLs, then fetch those. Say so in the brief rather than implying a full scan ran.

---

## Lane 1 — Motorsport, MX, MTB and cycling

`motorsport-graphics` territory. Highest-yield **buildable** lane: same process, far more design budget, annual named cadence, and a mature tradition of livery geometry and sponsor-block hierarchy.

**Discovery is editorial and search first.** Feeds are for dating a drop you already found.

| Source | Route | Status 6 Aug 2026 |
|---|---|---|
| Pro cycling team kit launches | `cyclingnews.com`, `cyclingweekly.com`, `domestiquecycling.com`, `tour-magazin.de/en` | **Works.** Richest single source in the lane — every team relaunches annually, designs are argued about publicly, and the manufacturer usually states the reasoning |
| F1 / MotoGP / WEC liveries | Web search on livery reveals and season launches | **`reference` class.** Off-garment, but the geometry, sponsor hierarchy and colour systems are directly transferable |
| Seven MX | `https://www.sevenmx.com/products.json` | **Works.** Purest all-over-sublimation category with a live feed. Verification only |
| Troy Lee Designs | `https://www.troyleedesigns.com/products.json` | **Works.** Best-structured tags — season code, category tree, MOTO flag |
| Fasthouse | `https://www.fasthouse.com/products.json` | **Works, filter hard.** Mostly plastisol-on-cotton tees. Jersey product types only |

**Blocked — empty body on repeat attempts, do not retry:** foxracing.com, answerracing.com, airblaster.com, dharcoclothing.com, attaquer.cc, maap.cc, velocio.cc, cuoreofswitzerland.com.
**Not Shopify, no feed exists:** thormx.com, foxracing.com (Salesforce Commerce Cloud), pasnormalstudios.com (headless Next.js, soft-404s `/products.json`).

Fox, Attaquer and MAAP are three of the most design-forward names here and none will yield a feed. Reach them through editorial and search. **This is not a loss — editorial is the better source anyway.**

**Restraint direction** lives in road cycling and tri: tonal, gradient-led, minimal branding. HUUB (`huubdesign.com/products.json`), Zone3 (`zone3.com/products.json`) and Ornot (`ornotbike.com/products.json`) all work. Label restraint finds as such — see `TASTE.md`.

**Coeur Sports** (`coeursports.com/products.json`) is women's-only. **Standing filter 1 applies** — no product pages from here. Print flats only, and only where the print is genuinely the ingredient.

## Lane 2 — Combat sports beyond BJJ

**New lane, 6 August 2026.** Grappling is one branch of a much bigger tree, and the rest of it has been unwatched. Finds here usually land in `editorial-composition` (panel systems, movement lines following the body) or `neo-japanese` — but Muay Thai ornament and lucha geometry are their own thing, so tag by what the artwork *is*, not by the sport it came from.

```
Combat Sports
├── Striking — Boxing · Muay Thai · Kickboxing
├── Mixed Martial Arts (MMA)
└── Grappling — Wrestling (Freestyle/Folkstyle/Greco) · Judo · Sambo · BJJ (Gi/No-Gi)
```

### Wrestling — priority, and the biggest gap in the old register

Singlets are all-over sublimated poly-spandex. **Structurally identical to a rash guard**, with a mature panel-geometry tradition and an enormous custom-teamwear industry behind it — every US high school and college programme commissions its own. That is thousands of bespoke sublimated designs a year, solving exactly FK's problem.

- Custom teamwear houses: search on `custom wrestling singlet sublimated` — the design galleries on these sites are the target, not the shop
- NCAA and national programme kit — search on championship kit reveals
- Rudis, Cliff Keen, Matman, Blue Chip Wrestling
- **Why it matters:** singlet design has to work on a body in extreme motion and read from the stands. Same brief as a rash guard, solved for decades

### MMA fight kit — closest adjacent aesthetic

- UFC / Venum fight kit programme — every event has a bespoke sublimated kit
- Hayabusa (site blocked, reach via search), Bad Boy, Fusion
- Athlete walkout kit — separate from competition kit and usually the louder design

### Muay Thai and boxing — ornament and lettering

Satin construction differs, so most of this is `reference` class. Mine it anyway: Muay Thai shorts carry a genuinely distinctive ornament tradition (prajioud motifs, Thai script lettering, mirrored borders) that nothing in BJJ has touched. Boxing walkout robes carry an embroidery and lettering idiom worth translating to print.

- Search on Thai shorts brands, Fairtex / Yokkao / Twins design archives
- Lucha libre mask geometry — `reference`, strong graphic system, very underused in grappling

### Judo and Sambo — low priority

Mostly woven, little all-over sublimation. Check occasionally for competition-kit graphics, do not build a lane around it.

## Lane 3 — Reference-class artwork

**The lane most likely to raise the board's quality, and the one the old register was missing entirely.** Premium design language does not arrive attached to a garment. This lane hunts the artwork directly.

**Read `BENCHMARK.md` first.** It carries the full hunting list, three of Ladana's own designs as the standard, and the premium tells to read artwork against. The condensed version follows.

**Class is `reference`. The find must be the artwork itself — a flat, a print detail, a livery, a poster, a type specimen. Never a shoppable product page for a non-sublimated garment.**

| Territory | Where to hunt |
|---|---|
| `neo-japanese` | Ukiyo-e and woodblock archives, museum open-access collections, sumi-e and kintsugi work, contemporary Japanese illustration, hanafuda and kamon geometry, irezumi and neo-Japanese tattoo artists |
| `cyberpunk-tech` | Syd Mead · Ghost in the Shell · Akira · Blade Runner · Cyberpunk 2077 concept art · early Beeple · Vitaly Bulgarov. Game and anime key art, UI/HUD design, glitch and datamosh, PCB and technical-diagram aesthetics, Japanese warning labels |
| `luxury-streetwear` | **Lookbooks, not products.** ACRONYM · Guerrilla Group · C2H4 · Hamcus · Cav Empt · Undercover · WTAPS · Neighborhood · Nike ISPA and ACG · Stone Island Shadow Project. Study placement, typography and restraint |
| `printmaking-remix` | Kuniyoshi · Hokusai · Yoshitoshi · Yoshida. Japanese movie posters, Showa graphic design, matchbox labels, 1960s advertising, vintage packaging, exhibition posters |
| `motorsport-graphics` | F1 liveries · MotoGP · Japanese drift car liveries · WRC decals · endurance racing. Sponsor placement, technical numbering, asymmetry, bold type |
| `editorial-composition` | Swiss poster design · Japanese exhibition posters · Bauhaus · Constructivism · Brutalist graphic design. Album covers in electronic, industrial, metal, Japanese hip hop and synthwave. Packaging: Japanese whiskey labels, sneaker boxes, perfume, tea tins, sake bottles |

### Search strings that actually work

**Never search `rashguard design`.** It returns the average of the category, which is the problem this whole register exists to solve. Search instead:

`neo japan graphic design` · `futuristic japanese poster` · `cyber samurai` · `brutalist streetwear` · `japanese editorial design` · `y2k japanese graphics` · `industrial typography` · `ukiyo-e remix` · `dystopian fashion` · `techwear graphics` · `motorsport branding` · `screenprint texture` · `japanese warning labels` · `showa graphic design` · `japanese matchbox labels`

**Behance:** `apparel graphics` · `sportswear design` · `technical wear` · `fashion graphics` · `print placement` · `techwear branding`

**Also in scope:** type specimens and lettering (bucket `02-font-type`), textile and print archive material.

**Not in scope:** moodboard aggregators with no attribution, AI-generated art with no author, and anything where the source cannot be linked. **Never file an image whose origin cannot be cited.** Extract the *mechanic* — composition, palette relationship, type hierarchy — and write it in the note. The image is evidence, not the deliverable.

## Lane 4 — Athletes

The customer has an idol. They see what Gordon Ryan competes in, or trains in casually, and they want it.

**What to capture:** rash guard, shorts, colourway, graphic, brand, event, date. **Separate competition kit from casual training** and say which — the casual choice is frequently the truer taste signal.

**Who:** Gordon Ryan (33 products in the FK catalogue, the anchor athlete) · Giancarlo Bodoni (named in brand context, absent from the feed — establish whether that is an opportunity or a lapsed deal) · Olivarez · then current ADCC medallists, WNO headliners, CJI competitors.

**How:** Instagram via Claude in Chrome. Event accounts — ADCC, WNO, Sub Club, CJI — beat individual athlete accounts because they cover a whole field at once. **Chrome is not available to scheduled runs**, so on an automated day this lane runs on web search only, or is skipped and declared skipped.

## Lane 5 — BJJ competitors (lowest visual weight)

Capped at roughly one visual find a day, and **only for a genuinely new design series that clears the premium bar**. Republishes, recolours and sale-tagged reissues do not qualify. Round two put 36 BJJ finds on the board; that must not happen again.

| Brand | Feed | Notes |
|---|---|---|
| Tatami Fightwear | `https://www.tatamifightwear.com/products.json` | Standing Artwork Rash Guards range. **The structural lesson — one construction, many colourways — is worth more than their graphics, and their colour blocks are now a standing reject** |
| Gold BJJ | `https://goldbjj.com/products.json` | Strong illustrated programme, named artist collaborations. The best of the BJJ lane |
| Shoyoroll | `https://shoyoroll.com/products.json` | Premium/hype benchmark. Minimal, codename-driven. Useful as a *premium perception* reference |
| Kingz | `https://www.kingz.com/products.json` | High cadence. Heavy republisher — verify everything |
| Sanabul | `https://sanabul.com/products.json` | Value tier — useful oversaturation signal |
| Origin Maine | `https://www.originmaine.com/products.json` | US-made / heritage positioning |
| FUJI Sports | `https://www.fujisports.com/products.json` | Licensed collabs. Republished its whole catalogue 3 Aug 2026 — treat with suspicion |
| Future Kimonos (own) | `https://www.futurekimonos.com/products.json` | Baseline. 208 rash guards — check before proposing anything |

**Blocked to `web_fetch`:** vhtsny.com, gymshark.com.
**Correction, 7 Aug 2026:** hayabusafight.com was listed here as blocked. It is not — it returns 250 products from the browser. It is excluded by Ladana's instruction, not by a technical limit. Keeping a false reason on record would mislead a future decision.

### Venum — PERMANENT SOURCE, promoted 7 Aug 2026

`https://row.venum.com/products.json?limit=250` — **250 products, 69 rash guards and shorts.** Confirmed live from the browser. **Sweep every run.**

**Why it earns permanent status, in Ladana's words:** *"Venum should be a good source reference — they have 1.7 million followers on Instagram, I think they have a strong influence on consumers adopting their rashguard styles."*

That is the right argument, and it is a different one from "their designs are good". Venum is **UFC's exclusive outfitter**, so its kit is worn by the athletes Future Kimonos' customers already look to, on the biggest stage the sport has. Reach at that scale does not just reflect taste — **it sets the baseline of what a rash guard is expected to look like.** Watching Venum is watching the reference point the customer is unconsciously comparing every other rash guard against.

**Track two separate things:**
1. **What they are shipping** — the design itself.
2. **What becomes normal because they shipped it.** A mechanic appearing on a UFC card is a mechanic the market will read as current within a season. Note when something crosses that line.

**Earned on evidence, not assertion.** Of Ladana's five kept product finds so far, **four are Venum**: the desert camo, UFC 288 black and gold, the Matupa snake print, and the khaki Stealth kit. No other brand has produced more than one keeper.

**⚠️ The brand cap still applies.** Venum is capped at ~4 finds per run like everything else, and for a specific reason: it is the closest aesthetic match in the register, which makes it the single most likely source of convergence. A board that is 60% Venum would look excellent and teach nothing. If the cap starts biting every run, say so in the brief — that is itself a finding about how far ahead they are.

---

## Lane 5b — Event-led discovery

**Added 7 Aug 2026.** One card puts an entire field in matching kit on one night, dated and photographed.

Rather than chasing athletes one at a time, work the event: UFC numbered cards, ADCC, WNO, CJI, Grand Prix, ONE, PFL. A single event yields a whole kit programme — champion variants, walkout kit, corner kit, country editions — designed to one brief and released together.

**Why it beats athlete-by-athlete:** it is dated, it shows a *system* rather than a one-off, and it surfaces the seasonal logic behind a drop. The UFC 288 Champ collection is the example — black base, gold as a line tracing the panel seams, name running the full spine.

**What to capture:** the event, the date, the kit tiers within it, and how the design changes between tiers. Note when a promotion runs country or champion variants — that is a repeatable range structure, not a single design.

## Lane 5c — Collab and licensing discovery

**Added 7 Aug 2026.** Where brands take their biggest graphic risks, because a borrowed IP gives permission to be strange.

Search on collaborations rather than products: `venum x`, `ufc x`, brand × game, brand × anime, brand × artist. Known live: Venum × Tekken 8 (Yoshimitsu), Fasthouse × Hot Wheels, Gold BJJ × named tattoo artists, FUJI licensed collabs.

**Two things to extract, and they are different:**
1. **The graphic** — what a licence let them do that they would not otherwise attempt.
2. **The mechanic** — collab as a *release strategy*. It supplies a story, a reason to be limited, and an audience that is not yours. **Future Kimonos has no collab programme.** Against eighteen months without a new series, that is a structural finding, not just a design one.

## Lane 5d — Retailer and aggregator discovery

**Added 7 Aug 2026.** Multi-brand stockists surface brands nobody would have thought to search for.

This is the accident that found Venum, made repeatable. A retailer that carries thirty rash guard labels is a map of the category, including the small and regional names invisible from a brand-by-brand list.

**What to capture:** brand names not already in this register, then assess each on its own. **The retailer is a directory, not a source** — never file a retailer listing image as a find. Go to the brand, verify the product, take the image from there.

**Also useful:** what a retailer chooses to feature, and what is discounted. Both are demand signals a brand's own feed will never show you.

## Lane 6 — Print, colour and macro direction (written, no images)

Prose in the brief with source links. Never a picture on the board.

1. **Sublimation and custom-teamwear trade commentary** — the most useful ring, written by people solving the identical production problem. Confirmed live 6 Aug 2026: gradient fades, asymmetric panel layouts and full-coverage graphics are the dominant requested effects this year, on 160–220 GSM poly-spandex.
2. **Performance sportswear** — what the big athletic brands signal on colour, silhouette and finish.
3. **Combat sports and no-gi** — the home niche. What is saturating, what is fading.
4. **Print and colour in fashion generally** — widest and least applicable. Keep it short.

**Live finding worth tracking, logged 6 Aug 2026:** trade sources report dark-to-light vertical torso fades as the most-requested sublimation effect of the year. That is close to inverted from James's stated light-top-to-dark-bottom preference, and it is the first evidence that the restraint direction has a commercial basis rather than being personal taste. Flag movement on this.

## Lane 7 — Consumer intelligence (written, not visual)

### Reddit — via Chrome only
- **Use `old.reddit.com`, never `www.reddit.com`.** The modern site is JS-rendered and returns an empty shell.
- Search pattern: `https://old.reddit.com/r/bjj/search?q=TERM&restrict_sr=on&sort=top&t=year`
- **Never guess a thread URL.** Post IDs invented from a search listing 404. Read real links off the search page.
- Reddit throttles rapid repeats and pages hang at 45s. Space requests; abandon a stalled load.
- Chrome is the only route and **a scheduled run will not have it** — say plainly when the lane could not run.
- Widen beyond r/bjj: r/wrestling, r/MMA, r/MuayThai, r/MTB, r/Motocross, r/cycling, r/soccer all argue about kit design.

### Sources that work headless
- Football Kit Archive Top/Flop ratings — the only public quantitative design-preference data in the register
- Competitor product-page review blocks — genuine athlete voice, free with a fetch you are already doing
- Review sites: heavybjj.com, grapplersgraveyard.com, bjjequipment.com, nationathletic.com

**Exhausted, do not re-run:** sublimation fade/peel — returns only brand care guides, no athlete voice.

## Lane 8 — Manual inbox

Anything dropped in `inspiration/inbox/` — screenshots from Instagram or TikTok, saved images, links in a `.txt` file. Picked up next run, **scored against the premium bar like everything else**, converted into finds, then moved into the matching `keepers/` bucket.

Ladana's own design references and Drive folders arrive here. **A reference Ladana supplied still gets scored** — but a low score on her own material is a signal the bar is miscalibrated, not that the reference is wrong. Raise it in the brief rather than silently dropping it.

---

## Football, rugby and esports — demoted, not deleted

Kept as a secondary editorial source. Football kit design is the most publicly-discussed graphic design in sport and these sites explain *why* a kit works, which is more useful than a product listing.

| Source | URL | Status |
|---|---|---|
| Football Shirt Culture | `https://www.footballshirtculture.com` | Works, best structured. `/kit-design.html`, `/leaked.html` |
| Football Kit Archive | `https://www.footballkitarchive.com` | Works. 485,000+ kits, release calendar, Top/Flop ratings |
| Footy Headlines | `https://www.footyheadlines.com/category/Kits` | Works, but the index is 59 KB. Fetch article URLs directly |

**Esports** has no feed route — sectorsix.com and ownagegear.com blocked, jakroo.com is a React SPA. Reach through search on G2, FaZe, T1, Fnatic, 100 Thieves kit launches.
**Rugby:** canterbury.com works but returns plain teamwear. Low priority.

---

## Context the collector must hold

- 208 rash guards already exist. Check the catalogue before proposing anything.
- No new design series since Serpent Core, February 2025. Cadence is the structural problem.
- Target customer: serious BJJ athletes and competitors, beginners, and fans of prominent grapplers. Competition credibility is the brand's core asset.
- Fabric is poly-spandex, roughly 160–220 GSM, four-way stretch. Fine hairlines and small type die on it.
- Ranked competition gear carries IBJJF colour and panel constraints.
- Historic Reddit criticism of Future Kimonos concerns **delivery times, never quality**. Reputational noise, not design signal.
