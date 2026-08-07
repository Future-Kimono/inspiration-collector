# Taste profile — Future Kimonos

> ### ⚠️ `PURPOSE.md` overrules this file
> **A mood board for Future Kimonos rash guard design, filled automatically instead of by hand.**
> Its job is to save Ladana and James time researching design inspiration.
> Run → 20–30 findings → they ★ keep or ✕ cut with a reason → those marks teach the next run.
> **One flat board. No tiers.** This file is *guidance on where to look*, never a specification
> of what to find. If anything below contradicts `PURPOSE.md`, `PURPOSE.md` wins.


How the collector calibrates. Read in full at the start of every run, together with `SOURCES.md`, `REJECTS.md`, `LEARNING.md` and **`SEEDS.md`**.

> **⚠️ `SEEDS.md` is required reading and is not in the skill's read-list.** It holds the
> exploration quota (~2 wildcards and ~1 seed chased per run, mandatory), the rule-scoping
> limits, and the parts-bin principle. **This file describes taste; `SEEDS.md` stops that
> taste becoming a cage.** Nothing below may be used to narrow the search further than the
> evidence supports.

**Rewritten 6 August 2026 (round three) after the board was rejected for a second time.** Rounds one and two both failed, for different reasons, and the diagnosis for round two is written down below because it is the reason this file now has a premium bar in it.

---

## Why round two failed — read this before changing anything

Round two produced 41 finds. 36 were BJJ, in the lane that is supposed to be the *smallest*. The rest were triathlon. The board contained items like "Contrast — mint and white", a two-tone colour block, and three separate colourways of the same women's Tatami SKU.

Two root causes, both structural:

**1. The collector never looked at the artwork.** It harvested `products.json` feeds and filed the metadata — title, tags, description, image URL — without ever opening the image. Its own board note admitted it: *"the collector could not see the artwork, so judge the images yourself."* A system that files design finds without seeing them is not curating, it is transcribing a product feed. **This is now forbidden. See The vision pass.**

**2. There was no quality bar, only a category bar.** Every rule in the old file answered *"is this the right kind of garment?"* and none answered *"is this any good?"* A plain mint colour-block rash guard passes the construction test perfectly. It is still not inspiration. **See The premium bar.**

Product feeds return average product listings by construction — that is what a catalogue is. Premium design does not live in a `products.json` file. It lives in editorial, in art direction, in team kit launches, in the work designers publish deliberately. The source register has been reweighted accordingly.

---

## What Future Kimonos actually sells

Read from their own product feed, not inferred.

- **401 products. 208 are rash guards** — 113 short sleeve, 78 long sleeve, 33 women's long sleeve. Plus 62 shorts, ~47 spats.
- **No gis. No tee collection.** Despite the name, there is not one kimono in the catalogue. Exactly one tee exists.
- Made-to-order, all-over dye sublimation, full front/back/sleeve panels. Product imagery is CGI render, not photography.
- Customisation is a core mechanic: buyers add their name, Instagram handle, and country flag. Sponsors / No Sponsors variants for competition kits.
- Uniform pricing: $79 against $129 compare-at.
- Trading identity in site metadata is **"Earn the Glory"**. Brand promises: competition tested, express service, global shipping.

**Target customer:** serious BJJ athletes and competitors, beginners buying into the sport, and fans of prominent grapplers. The brand trades on **competition credibility** — athlete collections (Gordon Ryan, Giancarlo Bodoni, Helena Crevar) are the core selling mechanic, not a sideline. Every find should be judged against: *would a competitor be proud to walk out in this?*

**Fabric reality:** polyester / spandex blend, roughly 160–220 GSM, four-way stretch. Everything on the board has to survive being printed on that and stretched over a body in motion. Fine hairlines, 1px rules, subtle tonal steps and small type all die on this fabric. Bold, high-contrast, large-scale artwork survives.

## The house aesthetic — loud, illustrated, graphic-dense

The catalogue is organised as roughly **50 named design series**, not colourways. The names are the aesthetic:

- **Japanese / cyber-samurai** — Akuma, Daruma, Tsuru, Immortal Samurai, Neo Tokyo, Honor Kintsugi, YOSO
- **Predators and skulls** — Serpent Core, Cobra 2099, Arachnid, Reaper, G Skull, Blood In The Water, Blood Blossom
- **Sci-fi and tech** — Prototype, Nebula, Cosmic Ranked, High Voltage
- **Americana** — All American, Yankee, All Star, Independence

Colour is saturated and largely mono per SKU. **Black is the anchor. Red `#ED1F24` is the brand accent** — it's in the logo file itself. Series often ship as black / red / blue triplets.

The one restraint signal worth noting: Serpent Core is described as *"a clean aesthetic on the front and a glitched snake image on the back"* — front minimal, back loud. That is the most recent design thinking in the catalogue and the closest thing to a bridge toward restraint.

---

# The premium bar

**New, 6 August 2026. This is the gate that was missing.** A find must clear the construction test *and* the premium bar. Construction decides whether it is the right kind of object. The premium bar decides whether it is any good.

Score every candidate out of 6, one point per test. **4 or more gets on the board. 3 or fewer is discarded silently — it does not become prose, it simply does not exist.** Record the score in the find's `score` field so the bar is auditable.

| # | Test | Passes when | Fails when |
|---|---|---|---|
| 1 | **Composed to the body** | Artwork is laid out for a torso — it wraps, crosses seams, resolves at the shoulder and hip, reads differently front and back | A rectangle of art dropped on a chest, or a repeat tiled flat with no regard for the garment |
| 2 | **Decisive palette** | 2–4 colours held with conviction, one of them doing the heavy lifting | Rainbow gradients, five-plus competing colours, or a default hue-shift ramp |
| 3 | **A drawn or crafted asset** | Real illustration, real lettering, real texture — someone made this | Stock geometry, clipart tribal, default vector swooshes, generic "vortex" linework, off-the-shelf camo |
| 4 | **Depth and finish** | Layering, halftone, grain, distress, print artefact, overprint — the surface has a material quality | Flat vector fills with no tonal information. This is the single most reliable cheapness tell |
| 5 | **Negative space** | The design knows where to stop. Quiet zones make the loud zone land | Full-bleed noise edge to edge with no hierarchy — the amateur signature |
| 6 | **Designed type** | Custom lettering, or a typeface chosen with intent and set properly | Default sports italic, off-the-shelf blackletter, a wordmark scaled up and repeated as a "pattern" |

### Instant rejects — do not score, do not file

- Two-tone colour blocking that follows the pattern pieces (the Tatami "Contrast" failure)
- A recolour of something already on the board or in the ledger
- Plain brand wordmark repeated as an all-over
- Generic geometric linework sold as a "pattern"
- Any image where the artwork is too low-resolution to actually assess
- **Any women's product page.** See below.

### No women's products on the board

**Hard rule, added 6 August 2026 at Ladana's instruction.** No women's product links, no women's SKUs, no women's model imagery on the mood board. This includes women's rash guards, spats, leggings, bras, trisuits and women's colourway variants.

Where a brand is women's-only (Coeur Sports, Betty Designs), the *print* may still be a legitimate ingredient — but it must be filed as a **flat artwork or print detail crop**, never a product page or a model shot, and the source link must go to the artwork, not the SKU. If a flat cannot be obtained, drop the find.

---

# The design territories

**Revised 6 August 2026 from Ladana's written direction.** The old system organised finds by *sport*, which is why the board read like a shopping list. Sport is where a find comes from. **Territory is what it is** — and territory is what a designer actually briefs against.

> **The one-line brief:** premium limited-edition technical apparel at the intersection of **Japanese culture, futuristic design, and luxury streetwear** — communicating discipline, mythology, technology and movement through **restrained colour, bold hero artwork, layered typography and thoughtful composition** rather than excessive visual complexity.

**`BENCHMARK.md` is the full statement, with three of Ladana's own designs as the reference standard. Read it before scoring anything.**

Every find carries a `territory`. These six:

| Code | Territory | What it looks like |
|---|---|---|
| `neo-japanese` | **Neo-Japanese / Modern Bushido** | Samurai, oni, dragons, tigers, snakes. Ukiyo-e and sumi-e. **Kanji as a graphic element, not as text.** Old Japan × future technology |
| `cyberpunk-tech` | **Cyberpunk / Neo Tokyo** | The strongest single influence. Red/black/white, glitch, futuristic type, vertical Japanese text, industrial graphics, warning labels, technical information, asymmetric layout. Akira, Ghost in the Shell, Y2K Japanese design |
| `luxury-streetwear` | **Streetwear graphic design** | Not sports jerseys. Large graphics, minimal logos, negative space, one oversized focal illustration. ACRONYM, Cav Empt, Undercover, WTAPS, Nike ACG/ISPA, Stone Island Shadow Project |
| `printmaking-remix` | **Vintage Japanese printmaking, remixed** | Kuniyoshi, Hokusai, Yoshitoshi — not reproduced but remixed with paint splatter, rough halftone, distressed overlay and modern type. The Takeshi piece is the house example |
| `motorsport-graphics` | **Motorsport graphics** | F1 liveries, MotoGP, Japanese drift cars, WRC decals, endurance racing. Sponsor placement, technical numbering, asymmetry, bold type |
| `editorial-composition` | **Editorial layout and combat minimalism** | A poster wrapped around a body — title, subtitle, body copy, signature, illustration, logos. And the restraint half: sleeves stay clean, graphics sit naturally on the torso, movement lines follow body panels |

A find with no territory is a find with no brief. If it does not sit in one of the six, it does not go on the board.

**Collections are design systems, not illustrations.** Neo Tokyo, Immortal Samurai, Cobra 2099, Serpent Core, Blood Blossom — each carries its own vocabulary across every garment. A find that demonstrates a *system* held across several pieces is worth more than a single nice graphic, and should be called out as such.

## The sports taxonomy — where combat finds come from

Grappling is one branch. The collector should be hunting the whole tree, because they all share the sublimated poly-spandex problem:

```
Combat Sports
├── Striking — Boxing · Muay Thai · Kickboxing
├── Mixed Martial Arts (MMA)
└── Grappling
    ├── Wrestling — Freestyle · Folkstyle · Greco-Roman
    ├── Judo
    ├── Sambo
    └── Brazilian Jiu-Jitsu — Gi · No-Gi
```

**Actively hunted (Ladana, 6 Aug 2026):** Wrestling and MMA fight kit. Singlets are all-over sublimated poly-spandex — structurally identical to a rash guard, with a mature panel-geometry tradition (school and national programmes, folkstyle in particular). MMA fight kit (Venum/UFC, Hayabusa) is the closest adjacent aesthetic to what FK sells.

**Secondary:** Boxing and Muay Thai — shorts and walkout kit, very graphic-dense, strong ornament and lettering traditions worth mining even though satin construction differs.

**Low priority:** Judo and Sambo — mostly woven, little all-over sublimation.

---

## The board rule — the construction test, revised

**Revised again 6 August 2026.** The old rule was binary: sublimated garment = image, everything else = prose. That is why the board became a wall of rash guard product photos. It forced out exactly the material that carries premium design language — artwork, liveries, graphic systems — because those do not arrive attached to a poly-spandex garment.

Finds now carry a `class`, and both classes can carry images:

### `buildable` — a designer could take this straight onto an FK panel layout

All-over dye-sublimated onto synthetic technical cloth:

- Rash guards, spats, no-gi shorts
- **Wrestling singlets — freestyle, folkstyle, Greco**
- **MMA fight kit and fight shorts**
- Cycling, MTB, gravel and BMX jerseys and bibs
- Motocross and enduro jerseys
- Football, rugby and basketball kit
- Trisuits, running and track kit
- Esports and teamwear jerseys
- Surf rash vests

### `reference` — the artwork is the ingredient, the garment is irrelevant

Image allowed **only if the find is the artwork itself**, not a product listing. A flat, a print detail, a livery, a poster, a type specimen, a graphic system.

- Luxury streetwear graphic language, monogram systems, logo architecture
- Motorsport liveries and race graphics off-garment
- Illustration, printmaking, packaging, poster and album art in one of the five territories
- Type specimens and lettering
- Textile and print archive material

**A `reference` find must never be a shoppable product page of a non-sublimated garment.** That is what got round one killed. A cotton tee on a product page is still rejected; the artwork printed on it, shown as a flat, is a legitimate reference find.

### Neither — written prose only, no image

- Macro trend commentary, colour forecasts, runway and fashion print direction
- Consumer voice, reviews, Reddit
- Cadence and release-timing findings

**The test to apply when unsure:** *could a designer take this artwork onto an FK panel layout tomorrow?* Yes → `buildable`. *Is this a graphic idea worth stealing the idiom from, shown as artwork rather than as a product?* → `reference`. Neither → prose.

---

## The two tiers

**Set 6 August 2026 at Ladana's instruction, after run 3.** The board carries two kinds of find and they are gated differently. Every find declares its `tier`.

### `curated` — the premium bar applies

Reference-class artwork and any garment good enough to stand as design direction. **Must score 4/6 or better.** Nothing below the bar is filed; it is discarded silently. Target **8–10 per run**.

### `sweep` — no quality gate

The product half. Real garments, shown as they are, so the reject buttons can teach the filter. **Ladana's instruction: "show me everything, I'll reject fast."** Target **15–20 per run**.

Sweep rules:

- **Scores are still recorded** — they are my read, not a gate. Being wrong about one is useful information.
- **The standing filters in `REJECTS.md` still apply.** Ungated means no *quality* gate. Women's SKUs, cotton, mineral-wash, garment-dye, accessories and hard goods are still removed before anything reaches the board — those are category rules, not taste rules.
- **Every image is still looked at**, in a contact sheet if need be, and **every image URL is load-tested before publishing**. Shopify CDN images frequently 404 without their `?v=` version parameter — keep it.
- **Include a floor marker when one is available.** One deliberately plain item makes the bar visible in a single scroll.
- Near-duplicates are still one find. Colourways of the same artwork go in the note, unless the point *is* the colourway range — then file two and say so.

**Total: 25–30 finds per run.** That is a target, not a quota. Four excellent curated finds still beats ten padded ones, and an honest empty lane still beats a filled one.

## Lane weighting

| Share | Lane | Tier |
|---|---|---|
| ~8 of 30 | **Motorsport, MX, MTB, cycling** | mostly sweep |
| ~8 of 30 | **BJJ and combat competitors** — the direct field | sweep |
| ~6 of 30 | **Reference-class artwork** in the six territories | curated |
| ~4 of 30 | **Combat beyond BJJ** — wrestling, MMA, Muay Thai, boxing | either |
| ~2 of 30 | **Athletes** — what named grapplers compete and train in | either |
| written only | Macro direction, consumer voice, cadence | — |

Note the change: **BJJ is no longer capped at 0–1.** Round two failed because 36 of 41 BJJ finds were filed as if they were design direction. As a declared sweep tier, the same brands are useful — you can see the field and reject it fast.

---

## ⚠️ The tension, stated plainly

The internal taste recorded in planning meetings — deep greys, speckled greys, minimal branding, no logos, strong type — is **close to the opposite of what Future Kimonos sells**. The brand is maximalist, illustrated and named-series driven; the stated preference is minimalist and anonymous.

Both are real. The collector must not silently resolve this:

- Default to **the existing brand language** (illustrated, saturated, series-driven), because that is what the customer base buys.
- Surface restraint-direction finds as a **clearly labelled** minority, not mixed in as if they were the same thing.
- The `luxury-streetwear` territory is where restraint legitimately lives now — it lets restraint arrive as *premium*, which the brand can use, rather than as *plain*, which it cannot.
- Never present a minimal heather-grey tee as inspiration for this brand again.

## Copy voice, for reference

Formula: hype hook → story/provenance → performance spec → customisation instructions. Openings are almost always "Introducing the…". Second person, imperative, combat verbs — "dominate", "earn the glory". Not restrained, not ironic, no humour.

Sample provenance hook: *"designed for Gordon KING Ryan, who wore it at WNO24."* Athlete provenance is the core selling mechanic — which is exactly why the athlete lane matters more than the competitor lane.

## Athletes and events already owned

- **Gordon Ryan** — 33 products, dedicated ADCC 2022 and ADCC 2024 collections
- **Helena Crevar** — 25 products, the largest women's line
- **Olivarez** — ADCC 2024 red and black
- **ADCC** — multiple series including ADCC 2024 Team camo
- Events referenced: ADCC super-fights, WNO (Who's Number One), Grand Prix, Sub Club

Giancarlo Bodoni is named in brand context but has no dedicated collection in the feed — worth checking whether that is an opportunity or an expired relationship.

## The cadence problem

**No genuinely new design series has shipped since Serpent Core in February 2025** — eighteen months. Everything since is re-publishing, re-merchandising into colour collections, and discounting at 39–50% off.

This means competitor *cadence* is as important a finding as competitor aesthetics, and it means the collector's real job is to make a new series possible, not to admire other people's.

---

## Learned (from picks and rejections)

| Round | Date | Outcome | What it taught |
|---|---|---|---|
| 1 | 2026-08-05 | **All 12 finds rejected** | The board was a competitor *release scan* — tees, caps, gis, women's casual. Wrong process entirely: screen print on cotton transfers nothing to a sublimated panel. |
| 2 | 2026-08-06 | **All 41 finds rejected** | Two failures. (a) The collector filed finds from feed metadata without ever looking at the artwork. (b) There was a category bar but no *quality* bar, so plain two-tone colour blocks passed. Also: 36 of 41 came from BJJ, the lane weighted lowest. Product feeds cannot produce premium finds. |

## Rejected patterns

Live rejections with reasons accumulate in `REJECTS.md`, written from the board's reject buttons. This table is the permanent, structural version.

| Date | Pattern | Why |
|---|---|---|
| 2026-08-05 | Cotton graphic tees as *product listings* | Wrong process. Still rejected. The artwork shown as a flat may qualify as `reference` |
| 2026-08-05 | Caps and headwear | Not sublimated, not a category |
| 2026-08-05 | Gis and kimonos | Woven cotton. Not a category despite the brand name |
| 2026-08-05 | Minimal heather-grey, unbranded, type-only presented as the default | Opposite of the brand's actual language. Only valid as a labelled restraint find |
| 2026-08-06 | BJJ republishes and recolours presented as new drops | Confirmed across FUJI, Kingz, Tatami and FK itself. A republished timestamp is not a design event |
| 2026-08-06 | **Two-tone panel-following colour blocking** | Tatami "Contrast". Passes construction, fails every premium test. Not a design, a cut |
| 2026-08-06 | **Multiple colourways of the same SKU as separate finds** | One design is one find. Colourways go in the note |
| 2026-08-06 | **Any women's product link, page or model shot** | Ladana's instruction. Print flats only, where the print itself is the ingredient |
| 2026-08-06 | **Filing a find without opening its image** | The round-two root cause. See The vision pass in the skill |
| 2026-08-06 | **Generic geometric linework, stock camo, default vector gradients** | Fails premium tests 3 and 4. Reads cheap on poly-spandex |
