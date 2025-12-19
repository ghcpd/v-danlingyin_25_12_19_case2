# XMAS SHOP - Campaign Page

Small React + TypeScript app implementing a Christmas-themed shopping campaign landing page.

Tech stack
- React
- TypeScript
- Vite
- TailwindCSS
- pnpm

Install & run
1. pnpm install
2. pnpm dev

Project overview
- Header with logo and nav links
- Hero with title, subtitle, CTA and an animated Christmas tree (blinking lights)
- Product section with 4 product cards (image placeholder, name, price, Add to Cart)
- Footer
- Responsive layout using Tailwind breakpoints (sm, md, lg)

3 UI test cases
TEST CASE 1 — App bootstrap
- Run: pnpm install
- Run: pnpm dev
Expected:
- Dev server starts successfully
- No runtime errors

TEST CASE 2 — UI correctness
- Page renders:
  - Header
  - Christmas tree animation
  - Product cards
  - CTA button
Expected:
- No console errors
- All sections visible

TEST CASE 3 — Responsiveness
- Test widths: 375px, 768px, 1280px
Expected:
- No overflow
- Layout adapts: grid / stacked
- Tailwind breakpoints used

Notes
- All code is client-side and intentionally minimal. Styling uses Tailwind utilities and a few custom CSS rules for animations.
