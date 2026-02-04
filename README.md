# Xmas Shop — Christmas Campaign Page

Short project implementing a festive landing page.

Tech stack
- React + TypeScript
- TailwindCSS
- Vite (dev server)
- pnpm (package manager)

How to run
1. Install dependencies: `pnpm install`
2. Start dev server: `pnpm dev`
3. Open the printed local URL (default http://localhost:5173)

What is implemented
- Header with logo and nav
- Hero with CTA button "Shop Now"
- Animated Christmas tree (SVG + CSS blinking lights + subtle float)
- 4 product cards with Add to Cart buttons
- Footer
- Responsive layout using Tailwind breakpoints

3 UI test cases

TEST CASE 1 — App bootstrap
- Run: `pnpm install`, `pnpm dev`
- Expected: Dev server starts successfully, no runtime errors

TEST CASE 2 — UI correctness
- Page renders: Header, Christmas tree animation, Product cards, CTA button
- Expected: No console errors, all sections visible

TEST CASE 3 — Responsiveness
- Test widths: 375px (mobile), 768px (tablet), 1280px (desktop)
- Expected: No overflow, layout adapts correctly, Tailwind breakpoints used

Notes
- No backend required. This is a static client-only demo.
- Colors follow the spec: green, red, white.
