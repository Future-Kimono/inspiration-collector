# Rejects ledger

> ### ⚠️ `PURPOSE.md` overrules this file
> **A mood board for Future Kimonos rash guard design, filled automatically instead of by hand.**
> Its job is to save Ladana and James time researching design inspiration.
> Run → 20–30 findings → they ★ keep or ✕ cut with a reason → those marks teach the next run.
> **One flat board. No tiers.** This file is *guidance on where to look*, never a specification
> of what to find. If anything below contradicts `PURPOSE.md`, `PURPOSE.md` wins.


**The dislike half of the loop.** `keepers/` holds what Ladana and James kept; this file holds what they threw out and why. The collector reads it in full at the start of every run and treats it as a filter, not as background reading.

Created 6 August 2026, when the second board was rejected. Before this file existed the system could only learn from likes — which meant it kept re-proposing the same weak material because nothing recorded that it had already been turned down.

## How this file gets written

1. Ladana or James hits **✕** on a card in the board and taps a reason chip.
2. **Export review** produces a KEEP block and a REJECT block, grouped by reason.
3. That gets pasted back to Claude, which appends every reject to the table below and — this is the part that matters — **turns repeated reasons into rules** in the Standing filters section.

## The rule that makes this work

**One reject is an opinion. Three rejects sharing a reason is a rule.** When the same reason lands on three finds with a shared attribute, write a standing filter for it. Say so in the next brief so the change is visible rather than silent.

Never delete a row. A pattern that stops being rejected because the collector stopped surfacing it is not a pattern that went away.

## ⚠️ Scope every rule to the narrowest evidence

**Added 7 August 2026, after Ladana pointed out the system was convergent.**

A rejection means *"this execution is wrong."* It does **not** mean *"this whole direction is wrong."* Writing rules broader than the evidence is how a research tool collapses into a mirror of what someone already liked.

| Evidence | ✅ Correct rule | ❌ Over-broad rule |
|---|---|---|
| 3 Troy Lee / Fasthouse sweep jerseys rejected as `cheap` | Raise the bar for MX product sweep — flat vector fills with no tonal information stop qualifying | Drop the motorsport lane |
| 2 colour-block rash guards rejected as `plain` | A base colour alone is not a design event | Stop showing rash guards |
| A ukiyo-e print rejected as `busy` | Crowded multi-figure compositions don't read on a body | Stop showing printmaking |

**Three tests before writing any standing filter:**

1. **Is it the narrowest rule that explains the evidence?** If a narrower one fits, use that.
2. **Does it close a door or raise a floor?** Prefer raising the floor. Only close a door on an explicit instruction in words.
3. **Would it have excluded something previously kept?** If yes, it is too broad. Narrow it.

**Only Ladana or James, in words, can close a direction entirely.** A button click can never do it. If a rule below is broader than its evidence, that is a bug — say so and it gets narrowed.

Wildcard finds (`wildcard: true`) are **exempt**. Rejecting one never counts toward a filter and never narrows a territory. See `SEEDS.md`.

---

## Standing filters — applied on every run, before scoring

These are earned rules. Each one traces back to rejections below.

| # | Filter | Earned from |
|---|---|---|
| 1 | No women's product pages, SKUs or model shots. Print flats only, where the print itself is the ingredient | Ladana, direct instruction, 6 Aug 2026 |
| 2 | No two-tone panel-following colour blocking | Round 2 — Tatami Contrast, 6 finds |
| 3 | No multiple colourways of one design as separate finds. One design, one find | Round 2 — 8 near-duplicate finds |
| 4 | No find may be filed without its image having been opened and looked at | Round 2 root cause |
| 5 | No generic geometric linework, stock camo or default vector gradients | Round 2 — Tatami Vortex / Technical |
| 6 | No cotton-garment product listings. The artwork as a flat may still qualify as `reference` | Round 1 |
| 7 | No caps, headwear or gis | Round 1 |
| 8 | No republished or recoloured SKU presented as a new drop | Round 2 — FUJI, Kingz, Tatami, FK |
| 9 | Nothing scoring 3 or below on the premium bar reaches the board, in any lane | Round 2 |
| 10 | **MX product sweep must clear the texture test (premium test 4) explicitly.** Flat vector fills with no tonal information do not qualify from `moto-mtb` | Run 4 — 6 `cheap`, all `motorsport-graphics`/`moto-mtb`, 5 of 6 Fasthouse |
| 11 | **No BJJ product whose only design event is a wordmark or a base colour.** `bjj` lane, sweep-grade product only | Run 4 — 5 `plain`, 3 in `bjj` |
| 12 | **Americana / collegiate / basketball-jersey styling is off-brand.** Scoped to that styling, not to the brands that made it | Run 4 — 5 `offbrand`, 3 Gold BJJ (Canarinho, Finest City, All-American) |
| 13 | Crowded multi-figure ukiyo-e with no dominant element. **Single-figure and landscape prints are unaffected and keep well** | Run 4 — 2 `busy`, both multi-figure Met prints |
| 14 | **DIRECTION CLOSED BY LADANA, IN WORDS, 7 Aug 2026: crystals, minerals, geodes and natural-history macro.** *"the stuff with crystals and ingridients are very wrong - very wrong direction"* | Her instruction + 6 cuts (`F0807-48`, `-49`, `-47`, `-51`, `-50`, `-44`) |
| 15 | **Raw source material that does not read as an apparel graphic does not belong on the board.** A museum textile, a rock, an insect wing or a photo of a race car is research, not inspiration. **Artwork that already reads as a graphic — prints, calligraphy, illustration, silhouettes — is unaffected and keeps well** | Run 5: 11 of 23 cut, almost all raw reference. The 4 keeps were 3 garments and 1 flat silhouette |

---

## Rejection log

Newest first. `Reason` uses the board's chip vocabulary so it stays groupable.

| Date | Find | Brand | Reason | Note |
|---|---|---|---|---|
| 2026-08-07 | Bismuth crystal, geode | Wikimedia | `type`→**closed** | Ladana closed the whole mineral/crystal direction in words. Both were wildcards, which normally exempts them from rule-forming — **an explicit instruction overrides that** |
| 2026-08-07 | Moth scales, luna moth wing | Wikimedia | `type`/`process` | Natural-history macro. Same closure |
| 2026-08-07 | Chōjū-giga frog, McLaren livery, Prague sgraffito | Wikimedia | `type` | Raw reference that does not read as apparel. See filter 15 |
| 2026-08-07 | Scythian stag plaque | Cleveland | `offbrand` | Object photography, not a graphic |
| 2026-08-07 | Javanese sarong ×2 | Cleveland | `process`/`busy` | Museum textile shot flat — reads as a museum record, not a design |
| 2026-08-07 | Peruvian feathered panel | Cleveland | `recolour` | My strongest argument of the run, and she still cut it. Noted |
| 2026-08-07 | 6 MX jerseys (Fasthouse ×5, Troy Lee ×1) | Fasthouse, Troy Lee | `cheap` | Flat vector, no tonal information. **Scoped to MX product sweep — the motorsport lane stays open**, and the Troy Lee Jersey Myth colourway was kept in the same run |
| 2026-08-07 | 5 plain garments | Shoyoroll, Gold BJJ, Troy Lee, Venum | `plain` | Base colour or wordmark as the only design event |
| 2026-08-07 | 5 off-brand | Gold BJJ ×3, Troy Lee, The Met | `offbrand` | Americana/collegiate styling. One Met shaffron also off-brand |
| 2026-08-07 | 3 generic | Troy Lee, Fasthouse, Venum×UFC | `generic` | Seen-everywhere motorsport graphics |
| 2026-08-07 | 2 crowded ukiyo-e | The Met | `busy` | Multi-figure compositions, no dominant element |
| 2026-08-06 | All 41 finds, run 2 | mixed | `generic` / `plain` | Board rejected wholesale. 36 of 41 were BJJ product listings in the lowest-weighted lane. Archived to `board/finds.archive-2026-08-06-run2.js` |
| 2026-08-06 | Contrast — mint and white | Tatami | `plain` | Two-tone colour block. Passes construction, fails every premium test |
| 2026-08-06 | Contrast — mint and black | Tatami | `plain` | Same block, second colourway |
| 2026-08-06 | Contrast — purple and black | Tatami | `womens` | Women's product page. Also a colour block |
| 2026-08-06 | Ladies Contrast, all variants | Tatami | `womens` | Women's SKUs, four separate finds from one design |
| 2026-08-06 | Helena taped leggings | Tatami | `womens` | Women's product |
| 2026-08-06 | WAZAIR leggings | Shoyoroll | `womens` | Women's product |
| 2026-08-06 | Geometric line vortex | Tatami | `generic` | Stock geometric linework sold as a pattern |
| 2026-08-06 | Neon green — Technical | Tatami | `generic` | Colourway logged as a design find |
| 2026-08-05 | Cotton graphic tees, run 1 | Salty Crew, Vissla, Fasthouse | `process` | Screen print on cotton. Nothing transfers to a sublimated panel |
| 2026-08-05 | Caps and headwear, run 1 | mixed | `process` | Not sublimated, not a category |
| 2026-08-05 | Minimal heather-grey type-only tee | — | `offbrand` | Opposite of the brand's actual language |

---

## Reason vocabulary

The chips on the board. Keep this list short and mutually exclusive — every reason has to be something the collector can actually act on.

Premium test numbers refer to the six tests in `BENCHMARK.md`: 1 one hero · 2 negative space · 3 restrained palette · 4 layered typography · 5 texture and print artefact · 6 a complete visual world.

| Chip | Means | What the collector does about it |
|---|---|---|
| `plain` | Too plain | Raise the floor on tests 1 and 5. A bare base with no hero and no texture stops qualifying |
| `busy` | Too busy, no hierarchy | Enforce test 2 — negative space. Full-bleed noise with no lead element is out |
| `cheap` | Looks cheap, flat vector | Enforce test 5 — texture and print artefact. Flat fills with no tonal information are out |
| `generic` | Seen everywhere | Stock assets, clipart, default geometry. Check the motif against the ledger before filing |
| `process` | Wrong process | Reclassify as `reference` if the artwork stands on its own, otherwise drop |
| `womens` | Women's product | Standing filter 1. Should never reach the board — if it does, the harvest step is broken |
| `recolour` | Not a new design | Verify against the ledger and the FK catalogue before filing, not after |
| `offbrand` | Off-brand for FK | Territory is wrong or absent. Re-check against the six territories in `BENCHMARK.md` |
| `notidea` | **Not a rashguard idea** | **The chip Ladana actually wanted.** The thing may be beautiful and still be raw research. Stop filing that category |
| `typography` | Bad typography | Enforce test 4 — layered typography. One wordmark scaled up, or default sports italic, is out |
| `type` | *Retired 7 Aug 2026* | Was labelled "Bad type" and read as "wrong type of thing". Historic rows kept; the chip now says so |
| `quality` | Image too poor to judge | Harvest failure. Find a better image or drop the find — never file something unassessable |

### A note on where rejects should be coming from

If most rejects carry `process`, `womens` or `recolour`, the **harvest** step is broken — those should be filtered before scoring. If most carry `plain`, `cheap` or `generic`, the **premium bar** is calibrated too low. If most carry `offbrand`, the **territory** assignment is being fudged. Read the distribution, not just the rows.
