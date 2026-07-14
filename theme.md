# Powerful Websites — living observatory contract

The homepage is an instrument for exploring the useful web, not a directory grid and
not a conventional landing page. Catalog data remains in `DATA` and `data-extra-*.js`.

## The idea

More than 1,000 distinct sites form a living field. The visitor can disturb it with the pointer,
compress it by typing, focus a constellation by choosing a category, or pull one
random signal out of the field. The result should feel like a digital exhibit while
remaining faster to understand than a normal tool directory.

## Non-scroll motion model

- Spectacle lives in one viewport-sized canvas behind the interface.
- Motion responds to time, pointer position, taps, search state, and category state.
- Do not build narrative scroll choreography or parallax sections.
- Search, navigation, category buttons, and result rows remain stable HTML controls.
- Never translate or tilt a control on hover. Motion belongs inside or behind it.
- Pause the canvas in hidden tabs and expose a persistent Motion on/off control.
- `prefers-reduced-motion` starts with a static field and removes decorative motion.

## Visual system

- Near-black stage, warm white type, acid chartreuse, signal coral, and electric blue.
- Syne is the display voice; Inter handles utility; JetBrains Mono handles telemetry.
- Strong outlined typography and hard technical borders. No glass-card grid, neon
  gradient fog, emoji decoration, stock space imagery, or fake analytics.
- The constellation is data-shaped: 13 groups, catalog-weighted counts, and visible
  state changes when search or categories change.

## Usability rules

- The main search is the largest stable control and always works with keyboard `/`.
- Results open in one focused panel; categories and saved sites use the same pattern.
- The panel may scroll normally, but opening it is a state transition, not a scroll
  trick. Escape and backdrop click close it.
- Favorites remain compatible with `pwl_favorites`.
- External sites open directly and descriptions show honest limitations.
- Mobile reduces particle count, keeps a native pointer/touch model, and uses a bottom
  sheet rather than shrinking the desktop panel.

## Performance

- Canvas animation uses `requestAnimationFrame`, delta time, capped device pixel ratio,
  and a smaller mobile particle budget.
- DOM animation is limited to `transform` and `opacity` where possible.
- No per-frame DOM layout reads, no hundreds of animated DOM nodes, and no animation
  libraries for effects the native platform can render directly.
