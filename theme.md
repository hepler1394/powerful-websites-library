# Powerful Websites Library — theme.md

> Design contract for the static catalog (`index.html`, plain HTML/CSS/JS, ~1,090 tools).
> Source of truth. The de-slop is applied as an override `<style>` layer at the end of
> `index.html` (last in the cascade) plus an emoji-strip step in `merge-categories.js`.

## Scene

Someone hunting for the right free tool among a thousand — scanning, comparing, clicking
through. The site is a **reference directory / almanac**: its job is to get out of the way
and let the *content* (the tools) be the interface. It should feel like a well-kept catalog,
not a carnival. Dark is fine (it reads as a "power-user tools" index), but calm and unified.

## Identity in one line

**A clean, calm reference directory — one confident red, content-first, no carnival.**

The old look piled on every 2023 tell at once: a spinning rainbow "Gemini" ring around
search, aurora blobs, gradient-clipped headline, **emoji category icons**, and a different
neon **gradient "Visit" button per category** (cyan, magenta, purple, gold, green). That
rainbow *is* the slop. Unify everything under one accent; let the cards carry the interest.

## Color — strategy: Restrained (neutral surfaces + ONE accent)

Keep the existing dark neutral scale; **collapse the per-category rainbow to a single red.**

| Role | Token | Value |
|---|---|---|
| Page bg | `--bg` | `#0a0a0a` |
| Section bg | `--bg2` | `#0e0e0e` |
| Surface | `--surface` | `#141414` |
| Card | `--card` / hover | `#1a1a1a` / `#222` |
| Border | `--border` | `rgba(255,255,255,.06)` |
| Ink | `--text` | `#e8e8f0` |
| Muted | `--text-muted` | `#8a8a9a` |
| **Accent** | `--accent` | `#dc2626` — THE single signal (visit buttons, active state, focus) |

Per-category colors survive **only** as small informational tag/dot hints — never as gradient
buttons, glowing card stripes, or hover blooms.

## The de-slop rules (applied 2026-07-07)

- **No spinning rainbow ring** on search — `.search-wrap` is a plain bordered field.
- **No aurora** — `body::before` / `.hero::before` blob layers off.
- **No gradient text** — hero H1, hero stats, and modal headings render solid `--text`.
- **One button style** — `.btn-visit` is solid `--accent`; every per-category gradient override
  is neutralized.
- **No gradient card top-stripes**, **no per-category hover glows** — flat cards, hairline
  borders, a single neutral hover shadow.
- **No emoji icons** — category `icon` fields are stripped in `merge-categories.js`; category
  headers are clean text. (Real SVG category icons could be added later if desired.)
- Eyebrows/tags sentence-case, not uppercase-tracked.

## Typography

Inter (already loaded). Headings solid, weight 700–800 is fine for a dense index; keep
`clamp()` sizing but **no gradient clip**. Body ≥4.5:1.

## Icons

No emoji. If icons return, one line-icon set, `currentColor`, sized to text. The favicon
thumbnails on each tool card are real and stay.

## Banned here

Rainbow per-category accents · spinning conic "Gemini" ring · aurora blobs · gradient text ·
per-category gradient buttons · gradient card stripes · per-category hover glows · emoji icons.

## Voice

Plain and useful. "1,090 free tools." Describe what each tool does; skip the hype.
