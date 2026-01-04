# Christmas Shop - Holiday Campaign Page

A festive e-commerce campaign landing page built with React, TypeScript, and TailwindCSS. Features an animated Christmas tree, product showcase, and responsive design.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Vite** - Build tool
- **pnpm** - Package manager

## Features

✅ Responsive design (mobile, tablet, desktop)  
✅ Animated Christmas tree with blinking lights  
✅ Product showcase with hover effects  
✅ Festive color scheme (red, green, white)  
✅ Smooth animations and transitions  
✅ No console errors  

## Installation & Setup

### Prerequisites
- Node.js (v16+)
- pnpm (https://pnpm.io/)

### Install Dependencies
```bash
pnpm install
```

### Run Development Server
```bash
pnpm dev
```

The app will automatically open at `http://localhost:5173`

### Build for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

## Project Structure

```
src/
├── App.tsx              # Main App component
├── main.tsx             # Vite entry point
├── index.css            # Global styles
└── components/
    ├── Header.tsx       # Navigation header
    ├── Hero.tsx         # Hero section with CTA
    ├── ChristmasTree.tsx # Animated tree
    ├── Products.tsx     # Product grid
    └── Footer.tsx       # Footer
```

## Test Cases

### TEST CASE 1: App Bootstrap
**Steps:**
1. Run `pnpm install`
2. Run `pnpm dev`

**Expected Results:**
- ✅ Dev server starts successfully at http://localhost:5173
- ✅ App loads without runtime errors
- ✅ No console errors or warnings

**Verification:** Open browser console (F12) and verify no errors appear.

---

### TEST CASE 2: UI Correctness & Completeness
**Steps:**
1. Ensure dev server is running (`pnpm dev`)
2. Verify all sections render:
   - Header with XMAS SHOP logo
   - Navigation links (Home, Deals, Gifts)
   - Hero section with "Christmas Sale" title
   - "Shop Now" button
   - Christmas tree with blinking lights and glowing star
   - 4 product cards with images, names, prices, discounts
   - "Add to Cart" buttons
   - Footer with copyright text

**Expected Results:**
- ✅ All sections visible and properly styled
- ✅ No console errors
- ✅ Animations running (blinking lights, glowing star)
- ✅ Hover effects work on buttons
- ✅ Colors match Christmas theme (red, green, white, gold)

**Verification:** Inspect each component visually and check browser console for errors.

---

### TEST CASE 3: Responsive Design
**Steps:**
1. Open app in browser at http://localhost:5173
2. Open DevTools (F12)
3. Test at different viewport widths:

   **Mobile (375px)**
   - Resize to 375x667
   - Verify no horizontal overflow
   - Navigation menu is accessible (mobile hamburger or stacked)
   - Product cards stack in single column
   - Hero title and buttons sized appropriately
   - Christmas tree visible and centered
   - All text readable

   **Tablet (768px)**
   - Resize to 768x1024
   - Verify layout adapts smoothly
   - Product cards display in 2 columns
   - Navigation shows properly
   - No content cutoff

   **Desktop (1280px)**
   - Resize to 1280x1024
   - Product cards display in 4 columns
   - Full navigation visible
   - Optimal spacing maintained
   - Max-width container (1280px) properly centered

**Expected Results:**
- ✅ No horizontal overflow at any breakpoint
- ✅ Layout adapts using Tailwind breakpoints (sm, md, lg)
- ✅ Text remains readable at all sizes
- ✅ All interactive elements accessible
- ✅ Images and trees maintain aspect ratios

**Verification:** Use DevTools device emulation to test each breakpoint. Verify no layout issues or overflow.

---

## Customization

### Colors
Edit `tailwind.config.js` to customize:
- `christmas-green`: Primary green
- `christmas-red`: Primary red
- `christmas-light-green`: Light green
- `christmas-gold`: Gold accent

### Products
Edit `src/components/Products.tsx` to modify product data in the `products` array.

### Animations
Animation configurations in `tailwind.config.js`:
- `blink`: Light blinking effect
- `float`: Subtle floating animation
- `glow`: Glowing effect for the star

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Performance

- Lightweight component structure
- CSS animations (GPU-accelerated)
- Optimized for fast load times
- No external image dependencies

## License

© 2025 Christmas Shop. All rights reserved.
