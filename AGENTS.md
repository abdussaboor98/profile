# Repository Guidelines

## Content Authority

Read [PROFILE.md](PROFILE.md) before changing biography, experience, education, or project claims. Its latest confirmed updates supersede older CV and website statements. Consult [PRODUCT.md](PRODUCT.md) for purpose and boundaries and [DESIGN.md](DESIGN.md) for the visual system. Preserve provenance, distinguish team results from personal contributions, and never equate acceptance with publication.

## Project Structure & Module Organization

React and Vite build the single homepage from `app/index.html`. Components live in `app/App.jsx`, public copy and project data in `app/portfolio.js`, and styles in `app/styles.css`. Public assets belong in `public/`. `scripts/redirects.mjs` generates compatibility redirects for the three former project pages.

`build/` is generated output. The root `index.html` and tracked `dist/` are retained legacy assets, not the current application or disposable build output. Locally ignored `references/` holds private source material and may be absent in other checkouts. Never copy PDFs into public output.

## Build, Test, and Development Commands

Use Node.js 22.19+ and `npm ci` to install the locked dependencies.

- `npm run dev` — local development server on port 4321.
- `npm run build` — generate the static site into `build/`.
- `npm run preview` — serve the production build locally.
- `npm test` — validate built routes, links, content boundaries, and assets after building.
- `git diff --check` — inspect whitespace before submission.

Run `npx playwright install firefox` once before browser tests, or supply `BROWSER_EXECUTABLE_PATH` for an existing compatible Firefox. No deployment hook, backend, linter, or coverage threshold is configured. The legacy Live Sass Compiler settings do not apply to the new CSS.

## Style and Validation

Use four spaces for JSX/JavaScript and two for CSS. Preserve surrounding conventions. Keep project introductions to 25–45 words with four to six supported technology/skill tags. Use accessible semantic HTML, visible focus, normal scrolling, and reduced-motion support. Use React for rendering and minimal browser behavior; do not add a client router or backend.

Check desktop/mobile layouts, keyboard navigation, image loading, console errors, and content accuracy for UI changes. Keep unrelated edits and vendored legacy libraries intact.

## Commits & Pull Requests

History has no formal commit convention; prefer concise imperative messages. Keep commits scoped. PRs should describe changes, link relevant issues, list validation, and include desktop/mobile screenshots for visual changes. Identify remaining content questions and deferred assets explicitly.
