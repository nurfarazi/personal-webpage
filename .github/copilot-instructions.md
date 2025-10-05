# Copilot instructions — personal-webpage

- Stack: React 19 + TypeScript + Vite. Entry: `src/main.tsx` -> `App.tsx`.
- Routing: `react-router-dom@7`. Pages live in `src/pages/` and have sibling global CSS files (e.g. `HomePage.tsx` + `HomePage.css`). Register routes inside `App.tsx`.

- Theming: `src/contexts/ThemeContext.tsx` + `src/hooks/useTheme.ts`. Theme is persisted to localStorage and mirrored to `document.documentElement` using a `data-theme` attribute. Change colors with CSS variables in `src/App.css` and `src/index.css`.

- Animations & motion:
  - Uses Motion v12 (`motion/react`) and motion values (`useMotionValue`, `useSpring`, `useMotionTemplate`).
  - Gate animations with `useReducedMotion` and keep heavy motion-driven objects memoized (`useMemo`) to avoid re-creating them every render.
  - Pointer-tracked glows and gradients follow the pattern in `src/pages/HomePage.tsx` and `src/pages/Contact.tsx`.

- Particles: `src/components/ThemedParticles.tsx` uses `react-tsparticles`. Compute options in `useMemo()` on `theme` and prefer `tsparticles-slim` for smaller bundles.

- Data patterns: Small page-specific lists (contacts, projects, experiences) live as localized arrays inside page files. Prefer editing those constants for content changes rather than introducing global state.

- Dev & build commands (see `package.json`):
  - `npm run dev` — Vite dev server with HMR (default port 5173).
  - `npm run build` — `tsc -b` then `vite build` (type-check enforced).
  - `npm run preview` — preview production build.
  - `npm run lint` — runs ESLint (config: `eslint.config.js`).

- Conventions & gotchas:
  - No TS path aliases — use relative imports.
  - Styles are global; scope class names by component prefix to avoid collisions.
  - Use `useMemo`/`useCallback` when computing theme-aware visuals or particle options.

- Key files to inspect when debugging:
  - `src/contexts/ThemeContext.tsx`, `src/hooks/useTheme.ts`
  - `src/App.tsx`, `src/main.tsx`
  - `src/components/ThemedParticles.tsx`, `src/components/Navbar.tsx`
  - Page files in `src/pages/` for localized data arrays and motion usage.
