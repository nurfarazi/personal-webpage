# Copilot Instructions for `personal-webpage`

## Project snapshot
- React 19 + TypeScript app scaffolded with Vite (`src/main.tsx` renders `<App />` into `#root`).
- Routing is handled with `react-router-dom@7`: `App.tsx` mounts `/`, `/contact`, and `/knowledge` routes inside a `<BrowserRouter>`.
- A global `ThemeProvider` wraps the app; theme state lives in `localStorage` and is mirrored on `document.documentElement` for CSS switching.

## Where things live
- Page components sit in `src/pages/`; each has a matching global CSS file (e.g., `HomePage.tsx` + `HomePage.css`). Styles are not scoped, so reuse class names carefully.
- Shared UI lives in `src/components/`. `Navbar` pulls `useTheme()` and drives navigation, while `ThemedParticles` adds the animated background via `react-tsparticles`.
- Theme primitives are defined in `src/contexts/ThemeContext.tsx` and `src/hooks/useTheme.ts`. Use the hook instead of reaching into context directly.
- Static assets (video, icons) are under `public/` and referenced by filename, e.g., `working.webm` in `HomePage.tsx`.

## Animation & interaction patterns
- Animations use the `motion/react` API (Framer Motion v12). Components define `Variants` objects and pass them to `motion.*` elements with `initial`/`animate` props.
- Motion values (`useMotionValue`, `useSpring`, `useMotionTemplate`) drive interactive glow backdrops in `HomePage.tsx` and `Contact.tsx`. Follow this pattern to keep pointer-tracked gradients smooth.
- Respect accessibility: every animated section gates motion behind `useReducedMotion`. New animations should offer the same fallback.

## Working effectively
- Preferred workflows:
  - `npm run dev` — Vite dev server with HMR.
  - `npm run build` — type-checks with `tsc -b` before bundling.
  - `npm run preview` — serves the production build locally.
  - `npm run lint` — runs the flat ESLint config in `eslint.config.js`.
- TypeScript paths are standard; no path aliases are configured. Keep imports relative to avoid breaking Vite resolution.

## Implementation tips
- When adding new pages, register the route in `App.tsx`, create the component under `src/pages/`, and add any styles in a sibling CSS file.
- Consume theme state via `useTheme()` and prefer CSS variables toggled by the `data-theme` attribute for color changes.
- For particle or other theme-aware visuals, follow `ThemedParticles.tsx`: compute options inside `useMemo()` keyed on `theme` to avoid expensive re-inits.
- Contact metadata, work experience cards, and similar content live in localized arrays. Update those constants rather than introducing new state containers unless interactivity demands it.

## Quality bar
- Keep components functional and typed; favor explicit interfaces for structured data (see `WorkExperience` in `HomePage.tsx`).
- Stay consistent with existing ARIA usage and accessible labels, especially around interactive icons and buttons.
- If you introduce new libraries, update `package.json` and run `npm install` so `package-lock.json` stays in sync.
