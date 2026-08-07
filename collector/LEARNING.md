# How the collector learns

> ### ⚠️ `PURPOSE.md` overrules this file
> **A mood board for Future Kimonos rash guard design, filled automatically instead of by hand.**
> Its job is to save Ladana and James time researching design inspiration.
> Run → 20–30 findings → they ★ keep or ✕ cut with a reason → those marks teach the next run.
> **One flat board. No tiers.** This file is *guidance on where to look*, never a specification
> of what to find. If anything below contradicts `PURPOSE.md`, `PURPOSE.md` wins.


> ## ⚠️ READ `SEEDS.md` NOW, BEFORE HARVESTING ANYTHING
>
> It is not in the skill's read-list, so this is the pointer. It is **required reading on
> every run** and it governs how far the collector is allowed to wander.
>
> It carries three things the skill does not know about:
>
> 1. **The exploration quota** — roughly a third of every run must come from somewhere not
>    yet established. ~2 **wildcards** marked `wildcard: true`, and ~1 **seed** genuinely
>    chased. This is mandatory, not a preference.
> 2. **Rule scoping** — a rejection means *the execution was wrong*, never *the direction is
>    closed*. Only Ladana or James, in words, can close a direction. Wildcard rejects are
>    exempt from rule-forming entirely.
> 3. **The board is a parts bin, not a shortlist** — a find can be worth keeping for one
>    element while the rest is bad. A star is not endorsement of the whole object.

---

**This is the loop that makes the tool get better instead of repeating itself.**

**The purpose is to widen the field of options, not to get better at agreeing with what has
already been liked.** A run returning thirty variations on last week's keepers has failed,
even if every find is good. `learn.mjs` prints a convergence warning when it starts happening
— when it fires, push exploration *up*, not down.

Ladana and James mark the board. Those marks become rules. The next run applies the rules
before it scores anything. Nothing here is automatic magic — the learning is literal:
rejections get written into files that the collector is required to read.

---

## The loop, end to end

```
  RUN            you sweep sources, score, publish 25–30 finds
    ↓
  REVIEW         ★ what holds · ✕ what doesn't, with a reason
    ↓
  SAVE           "Save my review" → reviews.json entry
    ↓
  LEARN          say "learn from the board" to Claude
    ↓            ├─ keeps  → keepers/<bucket>/ cards + TASTE.md Learned table
    ↓            └─ rejects → REJECTS.md log → standing filters
  NEXT RUN       filters applied BEFORE scoring. The rejected thing never comes back.
```

**Say this to trigger it:**

> **learn from the board**

Claude reads `reviews.json`, files everything, and reports what changed.

---

## What a single reject actually does

Take a real one. `F0806-30` is a plain red Shoyoroll rash guard, filed deliberately as a
floor marker. Reject it with reason `plain` and this happens:

1. **A row lands in `REJECTS.md`** — id, title, brand, reason, date. Permanent. Never deleted.
2. **The collector reads that file at the start of every run** and treats it as a filter,
   not as background reading.
3. **On its own, one reject changes nothing structural.** It is one opinion.

Now reject two more things for the same reason — say a bare colour-block rash guard and a
plain jersey. Three rejects sharing `plain`:

4. **That becomes a standing filter.** Claude writes a new row into the Standing Filters
   table: *"No garment whose only design event is a base colour."*
5. **Standing filters run before scoring.** Those items are removed at the harvest step —
   they never reach the board again, and they don't waste a slot.
6. **The next brief says so out loud.** Silent rule changes are forbidden; you should always
   be able to see what the tool learned and disagree with it.

**The rule: one reject is an opinion. Three rejects sharing a reason is a rule.**

## What a star does

1. **A keeper card is written to `keepers/<bucket>/`** — title, brand, territory, the design
   note, hex values, source and image URL. It survives the source page being taken down.
2. **The Learned table in `TASTE.md` gets a specific entry.** Not *"likes posters"* but
   *"3 of 4 kept finds were editorial-composition, all reference-class, none from products."*
3. **Lane and territory weighting shifts.** If every keeper for two runs comes from one
   territory, the next run reweights toward it and says so.

## What agreement does

When both of you have marks in `reviews.json`, the export shows:

- **`Both kept:`** — the strongest signal the system produces. Weighted above either of you alone.
- **`Disagreed:`** — one kept, one rejected. **Never auto-converted into a rule.** It gets
  raised in the brief for you two to settle, because a disagreement encoded as a filter
  would quietly lock in one person's taste.

---

## The reason codes, and what each one changes

Chosen so every reason maps to a *specific* mechanical change. A reason that can't change
anything is just a shrug.

| Reason | What the collector changes |
|---|---|
| `plain` | Raises the floor on premium tests 1 and 5 — needs a hero and needs surface texture |
| `busy` | Enforces test 2 — negative space. Full-bleed noise stops qualifying |
| `cheap` | Enforces test 5 — flat vector fills with no tonal information are filtered |
| `generic` | Adds the motif to a blocklist; checks new finds against it before filing |
| `process` | Reclassifies to `reference`, or drops. Usually means the harvest filter is wrong |
| `womens` | Should never appear. If it does, the harvest filter is broken — fix that, not the bar |
| `recolour` | Tightens ledger dedupe. Verify against the catalogue *before* filing, not after |
| `offbrand` | Territory was wrong or fudged. Re-check against the six in `BENCHMARK.md` |
| `type` | Enforces test 4 — layered typography at multiple scales |
| `quality` | Harvest failure. Find a better image or drop it — never file something unassessable |

## Read the distribution, not just the rows

The *shape* of your rejects diagnoses which part of the tool is broken:

- Mostly `process` / `womens` / `recolour` → **the harvest step is broken.** These should be
  filtered before scoring. Fix `SOURCES.md`, not the quality bar.
- Mostly `plain` / `cheap` / `generic` → **the premium bar is set too low.** Raise it.
- Mostly `offbrand` → **territory assignment is being fudged** to justify a find.
- Very few rejects → **the bar is too high** and interesting things are being discarded
  silently. Ask for the discard list.

---

## Where each thing is written

| File | Holds | Who writes it |
|---|---|---|
| `reviews.json` *(in the board repo)* | Raw stars and rejects, per person | The board, via "Save my review" |
| `REJECTS.md` | Every rejection + the standing filters earned | Claude, on "learn from the board" |
| `keepers/<bucket>/` | A card per kept find | Claude |
| `TASTE.md` → Learned | What each round taught, specifically | Claude |
| `BENCHMARK.md` | What "good" means — the calibration standard | Claude, when you give new direction |
| `briefs/YYYY-MM-DD.md` | What changed and why, in plain English | Claude, every run |

## Two rules that keep this honest

1. **Never delete a rejection row.** A pattern that stopped appearing because the collector
   stopped surfacing it is not a pattern that went away.
2. **Never change a rule silently.** Every learned filter is announced in the next brief.
   You should always be able to see what it decided and overrule it.
