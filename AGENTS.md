# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds all React + TypeScript source files; feature pages live under `src/pages/`, shared UI in `src/components/`, and theming utilities in `src/contexts/` and `src/hooks/`.
- Styling pairs with each view (`HomePage.css`, `Contact.css`) while global rules live in `src/App.css` and `src/index.css`.
- Static assets belong in `public/` for raw files or `src/assets/` when imported by bundler modules. Build artefacts output to `dist/` via Vite.
- Automation scripts (e.g., `scripts/analyze-map.mjs`) and GitHub workflows in `.github/` support deployment to Netlify.

## Build, Test, and Development Commands
- `npm install` synchronizes dependencies; prefer `npm ci` for CI parity.
- `npm run dev` launches the Vite dev server with fast HMR at http://localhost:5173/.
- `npm run build` performs a TypeScript project build (`tsc -b`) followed by `vite build` to produce optimized assets in `dist/`.
- `npm run preview` serves the production bundle locally for sanity checks.
- `npm run lint` runs ESLint using `eslint.config.js`; fix issues or document intentional exceptions inline.

## Coding Style & Naming Conventions
- Use TypeScript throughout; define prop types and context contracts in colocated `.ts` or `.tsx` files.
- Adopt two-space indentation, single quotes, and trailing semicolons to match existing files.
- Name React components and contexts in PascalCase (`ThemeProvider`), hooks in camelCase prefixed with `use`, and CSS classes with descriptive kebab-case (`.project-card`).
- Re-export shared utilities via barrel files only when it clarifies imports; otherwise use relative paths for explicitness.

## Testing & Verification
- No automated test runner ships yet. When adding tests, place Vitest/React Testing Library specs in `src/__tests__/` using `<Component>.test.tsx` naming.
- Until coverage tools exist, document manual verification steps in PRs (responsive view, navigation flows, Netlify preview).
- Run `npm run lint` and `npm run preview` before opening a PR to catch obvious regressions.

## Commit & Pull Request Guidelines
- Follow the conventional commit pattern visible in history (`feat:`, `refactor:`, `style:`). Keep summaries under ~70 characters and describe the why in the body when needed.
- Squash incidental fixes before pushing; each commit should represent a coherent change.
- Pull requests must include: problem statement, screenshots or GIFs for UI updates, manual test notes, and linked issues when applicable.
- Confirm GitHub Actions succeeds; Netlify deploys expect `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` secrets to remain valid.
