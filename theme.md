# Powerful Websites — design contract

This file governs the homepage shell. Catalog data stays in `DATA` and `data-extra-*.js`.

## The idea

Powerful Websites is an **internet reference desk**, not an AI-tool marketplace. It
should feel like a sharp independent publication that happens to contain a large,
searchable index. The page earns trust through restraint, useful descriptions, and
honest limitations.

## First-load rule

The homepage may show only:

1. one clear promise and search box;
2. a short, hand-picked shelf (six entries maximum);
3. one closed control for the full archive.

Categories are closed on every clean load. Never render the complete catalog at once.
Search and category pages reveal 12 entries at a time.

## Visual language

- Editorial paper, dark ink, one oxide-red accent.
- Serif display type for the publication voice; sans serif for utility; mono only for
  counts and filing metadata.
- Square edges, hairline rules, and direct typography. No gradients, glass, glows,
  floating pills, decorative dashboards, emoji icons, or fake activity metrics.
- Cards are index entries, not animated tiles. Hover may change only color, border, or
  background. **Never translate, scale, tilt, or chase the pointer.**
- Use real favicons only when they help identify a destination.

## Interaction

- Search should understand names, descriptions, categories, limitations, and sources.
- The archive is opt-in and category-led. Opening it must not open every category.
- Only one result context is presented at a time: query, category, or saved sites.
- Favorites remain local-first in `pwl_favorites` and must survive redesigns.
- External destinations open directly in a new tab. No hover overlays or intermediate
  card sheets.
- Keyboard focus, reduced motion, and a 320px viewport are first-class requirements.

## Voice

Plain, specific, and human. Prefer “honest limitations” over hype. Avoid “ultimate,”
“game-changing,” “unlock,” “supercharge,” and claims that a site feels “illegal.”
No sponsored rankings or invented urgency.
