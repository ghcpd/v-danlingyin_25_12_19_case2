# Christmas Shop — Campaign Demo

Overview
- Small single-page React + TypeScript app implementing a festive campaign page with an animated Christmas tree, product cards and CTAs.

Tech stack
- React 18 + TypeScript
- Vite
- TailwindCSS
- pnpm (package manager)

Quick install
1. pnpm install
2. pnpm dev

What you'll see
- Header with "XMAS SHOP" logo and nav
- Hero section with title, subtitle and "Shop Now" CTA
- Animated Christmas tree (blinking lights + subtle floating)
- 4 product cards with image placeholders and "Add to Cart" button
- Footer with © 2025 Christmas Shop

3 UI test cases

TEST CASE 1 — App bootstrap
- Run: `pnpm install` then `pnpm dev`
- Expected: Dev server starts, app opens, no runtime errors in console.

TEST CASE 2 — UI correctness
- Page renders header, tree animation, product cards and CTA button
- Expected: All sections visible, blinking lights animate, no console errors.

TEST CASE 3 — Responsiveness
- Test at widths: 375px (mobile), 768px (tablet), 1280px (desktop)
- Expected: No horizontal overflow, layout adapts (single column on mobile, grid on larger screens), Tailwind breakpoints used.

Notes
- Project is self-contained client-only; buttons are UI-only (no backend).
- Colors constrained to green/red/white palette and Tailwind utilities used throughout.

Enjoy the demo!
