# Future Kimonos — Design Inspiration Collector

**The board: https://future-kimono.github.io/inspiration-collector/**

Send James that link. Not a file — a link. See *Why the file went blank* below.

---

## What this is

A weekly design research tool. Claude sweeps competitor products, motorsport kit and art
archives, looks at every image, scores it, and puts the good ones on a visual board.
Ladana and James star what holds up and reject what doesn't — **with a reason** — and
those reasons become filter rules that make the next run better.

---

## How to run it

Say this to Claude, in the Future Kimonos folder:

> **run the inspiration collector**

That's it. Claude will:

1. Sweep the sources in `collector/SOURCES.md`
2. Look at every image and score it against `collector/BENCHMARK.md`
3. Add the good ones to `finds.js`
4. Write a brief in `collector/briefs/`
5. Push the updated board

Roughly 25–30 finds per run, in two tiers — a curated half held to a quality bar, and an
ungated product sweep so you can see the field and reject it fast.

## How to review

1. Open the board.
2. **★** on what holds up.
3. **✕** on what doesn't, then pick a reason. *The reasons matter more than the stars* —
   three rejects sharing a reason becomes a permanent filter rule.
4. Press **Save my review** and send the box to Claude.

Next time either of you opens the board, the other's marks show on each card —
gold `★ James` on what he kept, red `✕ James — too plain` on what he rejected.

Then say:

> **turn the starred picks into direction sheets**

---

## Why the shared file went blank

The board normally lives as two files: `index.html` (the viewer) and `finds.js`
(the actual finds). Send only the HTML through Slack and the second file isn't there,
so the board opens empty. That's what happened — nothing was broken.

Two fixes, both in place:

- **The link above.** Always works, always current. This is the real answer.
- **`FutureKimonos-Board.html`** — one self-contained file with everything inside it.
  Use this if you need to send a copy over Slack or email. It's a snapshot, so it won't
  pick up new finds, and stars saved in it stay in that browser until exported.

Rebuild the standalone any time with `collector/build-standalone.sh`.

---

## What's in here

| Path | What it is |
|---|---|
| `index.html` | The board viewer. Don't edit — it handles starring, rejecting and filtering |
| `finds.js` | The accumulating finds. Written by each run, never overwritten |
| `reviews.json` | Who kept and rejected what. This is what makes the board shared |
| `FutureKimonos-Board.html` | Self-contained copy for sending over Slack |
| `collector/BENCHMARK.md` | **The most important file.** What "good" means, built from real FK designs |
| `collector/TASTE.md` | The quality bar, the six design territories, the two tiers |
| `collector/SOURCES.md` | What gets watched, and what turned out to be a dead end |
| `collector/REJECTS.md` | Every rejection and the rules earned from them |
| `collector/briefs/` | The written half of each run — findings, evidence, dead ends |
| `collector/benchmark/` | The three FK designs everything is calibrated against |

## reviews.json format

```json
[
  { "who": "ladana", "at": "2026-08-07", "s": ["F0806-01"], "r": { "F0806-30": "plain" } },
  { "who": "james",  "at": "2026-08-07", "s": ["F0806-03"], "r": {} }
]
```

One entry per person; the newest for each wins. Reason codes:
`plain` `busy` `cheap` `generic` `process` `womens` `recolour` `offbrand` `type` `quality`

---

This repo holds the board and the collector's rules. Business documents and internal
notes stay in the private repo.
