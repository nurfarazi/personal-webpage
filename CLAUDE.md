# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start Vite dev server (HMR enabled, default port 5173)
npm run build    # Type-check (tsc -b) then build for production (vite build)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint on codebase
```

## Project Overview

This is a personal portfolio website built with **React 19 + TypeScript + Vite**. The site features:
- Dynamic theme system with light/dark mode and custom color schemes
- Animated components using Motion v12
- Particle background effects
- Multi-page layout with lazy-loaded routes
- Responsive design with global CSS scoping

**Entry Point:** `src/main.tsx` → `App.tsx`

## Architecture

### Routing & Pages
- Framework: `react-router-dom@7`
- Pages located in `src/pages/` with sibling `.css` files
- Routes defined in `src/App.tsx` (App.tsx:28-34)
- Pages are lazy-loaded via `React.lazy()` for code splitting
- Dynamic routes support: `/projects/:projectId` renders `ProjectDetail`

### Theme System
- **Context:** `src/contexts/ThemeContext.tsx` + hook `src/hooks/useTheme.ts`
- Theme persisted to `localStorage` and applied to `document.documentElement` via `data-theme` attribute
- Color palette managed in `src/contexts/colorOptions.ts` and `src/contexts/themeTypes.ts`
- CSS variables in `src/App.css` and `src/index.css` control colors across the site
- Theme provider wraps entire app to ensure availability everywhere

### Animations & Motion
- **Library:** Motion v12 (`motion/react`)
- Heavy use of `useMotionValue`, `useSpring`, `useMotionTemplate` for pointer-tracked effects
- **Key Pattern:** Gate animations with `useReducedMotion` to respect user preferences
- **Performance:** Keep motion-driven objects memoized with `useMemo` to prevent re-creation on every render
- Reference implementations: `src/pages/HomePage.tsx` (HomePage.tsx:219-233) and `src/pages/Contact.tsx` (Contact.tsx:219-267) for glow/gradient patterns

### Particles
- **Component:** `src/components/ThemedParticles.tsx`
- **Library:** `react-tsparticles` with `tsparticles-slim` (smaller bundle)
- Particle options computed in `useMemo()` based on `theme` to avoid expensive recalculations
- Particles respond to theme changes dynamically

### Data Patterns
- Small lists (contacts, projects, experiences, tools) live as localized constants inside page files
- **Not in global state:** Keep data close to where it's rendered
- Examples: `src/pages/projectsData.ts`, `src/data/toolsData.ts`, contact methods in `src/pages/Contact.tsx`
- **Edit directly:** For content updates, modify the constants in their respective files rather than introducing centralized state

### Components & UI
- **Navbar:** `src/components/Navbar.tsx` — persistent navigation
- **Icons:** `src/components/icons.tsx` — centralized SVG icon definitions
- **Color Picker:** `src/components/ColorPicker.tsx` — theme color customization UI
- **Tools Section:** `src/components/ToolsSection.tsx` — displays skill/tool categories

### Utilities & Helpers
- **YouTube utility:** `src/utils/youtube.ts` — helper for embedding/processing YouTube content

## Key Conventions

### TypeScript & Imports
- **No path aliases:** Use relative imports only (`import { ... } from '../components/...'`)
- Type definitions collocated with context: `themeTypes.ts`
- Vite env types: `src/vite-env.d.ts`

### Styling & Design System
- **Unified Design System:** All styling is centralized in `src/design-system.css`
  - Source of truth for colors, typography, spacing, borders, animations, and component patterns
  - Imported first in `src/main.tsx` before all other styles
  - Uses CSS variables exclusively — never hardcode colors, sizes, or spacing
  - See `DESIGN_SYSTEM.md` and `DESIGN_SYSTEM_QUICK_REF.md` for complete documentation

- **Component Styling:**
  - Page styles are sibling files: `HomePage.tsx` pairs with `HomePage.css`
  - Use established patterns from design system (card, button, badge, list-item, bento-card)
  - Prefix class names with component name to avoid collisions: `.contact-page`, `.contact-card`, `.contact-item__icon`
  - All CSS variables defined in design system — never define new hardcoded values

- **Theme Variables:**
  - Dynamic accent color controlled by `src/contexts/ThemeContext.tsx` and color picker
  - Light/dark theme automatically handled by `[data-theme="dark"]` selector
  - Typography scale with responsive `clamp()` for fluid sizing
  - Spacing scale from `--spacing-xs` (4px) to `--spacing-xxl` (48px)

### React Patterns
- **Lazy loading:** Pages imported via `React.lazy()` with `Suspense` boundaries (App.tsx:7-12, 27-35)
- **Hooks:** Prefer custom hooks (`useTheme`) over context directly for cleaner code
- **Memoization:** Use `useMemo`/`useCallback` for theme-aware visuals and particle option computation

### Motion & Performance
- Always check `useReducedMotion()` before heavy animations
- Memoize objects returned from `useMotionValue`, `useSpring`, `useMotionTemplate`
- Reference implementations in `HomePage.tsx` and `Contact.tsx` show the pattern

## Important Files for Debugging

- `src/contexts/ThemeContext.tsx` — theme state & provider logic
- `src/hooks/useTheme.ts` — theme consumption hook
- `src/App.tsx` — routing setup & app structure
- `src/main.tsx` — React DOM rendering
- `src/components/ThemedParticles.tsx` — particle background setup
- `src/components/Navbar.tsx` — navigation & theme toggle UI
- `src/pages/` — page components with localized data arrays

## Build & Type Safety

- **Type checking enforced:** Build command runs `tsc -b` before Vite build; will fail if TypeScript errors exist
- **No aliases:** Keeps module resolution simple
- ESLint config in `eslint.config.js` enforces React hooks rules and refresh conventions
- Vite production optimizations are standard (tree-shaking, minification, code-splitting)
