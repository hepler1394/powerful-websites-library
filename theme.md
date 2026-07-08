# theme.md — Powerful Free Websites Library

The durable design contract. Read before touching the shell/UI. Do **not** edit the
catalog data (`data-extra-*.js`, the `DATA` array) — this file governs the *shell*.

> History: a 2026-07-07 pass wrote de-slop intentions here but never actually shipped
> them — a trailing `<style id="glass-overhaul-v2">` block (last in the cascade, all
> `!important`) re-added the aurora + glassmorphism onto the default dark theme, and the
> Gemini ring / gradient text / emoji tabs were still live. The `antislop-2026-07` pass
> below is the one that was actually implemented and verified in the browser.

---

## Scene sentence

It's 1 a.m. A power user is hunched over a dark screen hunting the one free tool that
does the thing — a no-signup AI, a way past a paywall, a stream. This site is their
**reference desk for the free web**: a plain, fast, faintly clandestine card catalog of
"sites that feel illegal to know." A librarian's index, not a SaaS landing page. It
should feel like a tool a power user keeps bookmarked, not a product being sold to them.

## Identity — "The Index"

Utilitarian dark catalog. The distinctive axis is **typographic, not chromatic**:
metadata (counts, category labels, tags, the badge line) is set in a **monospace** —
read it as the call-numbers of a card catalog — while site names and prose stay in a
clean sans. Category identity is carried by a **line icon + a mono label**, never by
color. Exactly one accent color, and it earns its keep.

Color strategy: **Restrained → Committed.** Near-black flat ground, one red accent used
only for the active state, primary action, focus ring, and the live indicator. No
rainbow, no glow, no glass.

## Color tokens (OKLCH; hex is the shipped value; dark is the default theme)

| Role            | Hex        | OKLCH (approx)           | Use |
|-----------------|------------|--------------------------|-----|
| `--bg`          | `#0a0a0a`  | `oklch(0.178 0 0)`       | page ground — flat, no aurora |
| `--surface`     | `#141414`  | `oklch(0.221 0 0)`       | nav, panels |
| `--card`        | `#1a1a1a`  | `oklch(0.257 0 0)`       | card fill — opaque, no glass |
| `--card-hover`  | `#222222`  | `oklch(0.293 0 0)`       | card hover fill |
| `--border`      | `rgba(255,255,255,.06)` | —           | hairlines |
| `--text`        | `#e8e8f0`  | `oklch(0.930 0.008 286)` | body / names — ~13:1 on bg |
| `--text-muted`  | `#9a9aac`  | `oklch(0.680 0.014 286)` | secondary — ~5:1 on bg |
| `--accent`      | `#dc2626`  | `oklch(0.577 0.222 27)`  | THE accent — active, primary, focus, live |

`--text-muted` was lifted from `#8a8a9a` → `#9a9aac` to clear 4.5:1 for body text.
Every category token (`--piracy-accent`, `--llm-accent`, …) is collapsed to `--accent`
/ `--accent-glow`. They still exist so downstream rules resolve, but they no longer
paint a rainbow. **Do not reintroduce per-category hues.**

## Type

- **Sans:** Inter (400–900). Site names, descriptions, prose, headings.
- **Mono:** JetBrains Mono (400/500/700), var `--mono`. Counts, category/section labels,
  tags, hero badge line, the "N websites" figure. This IS the brand signal.
- Hero `h1`: solid `--text` (no gradient text), `clamp(2.2rem,5.5vw,3.8rem)`, weight
  900, `letter-spacing:-0.02em`, `text-wrap:balance`.
- Prose capped ~68ch. Modest scale (product register) — don't shout.

## Icon rule (hard)

**Never emoji as icons in shipped UI.** Every category tab, hero stat, and control uses
an inline `<svg>` line icon: `viewBox="0 0 24 24"`, `fill="none"`,
`stroke="currentColor"`, `stroke-width="2"`, ~15px. Icons inherit `currentColor`, so
they follow the one-accent system. Card favicons are real site logos (Google s2) — they
stay; they are not decorative emoji.

## Motion

- Purposeful only. 150–250ms, ease-out. State/feedback, not choreography.
- No aurora, no spinning conic rings, no infinite background animation.
- The one persistent motion allowed: the small green "live" pulse dot (identity).
- Every animation needs a `@media (prefers-reduced-motion: reduce)` fallback.

## Voice

Plain, confident, a little insider. "1,090+ websites that feel illegal to know." Short.
No marketing throat-clearing. Counts stated flatly, like a catalog: `204 free tools`.

## Banned (match-and-refuse)

neon / glow; gradient text (`background-clip:text` + gradient); glassmorphism as the
default surface; emoji-as-icons; colored/gradient buttons as the default; per-category
rainbow color; aurora / full-screen animated background; spinning conic "Gemini" search
ring; uppercase tracked eyebrows on every section; 01/02/03 numbered scaffolding;
side-stripe (`border-left/right` >1px) accents; cream/sand/beige body bg.
