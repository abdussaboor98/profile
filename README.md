# Abdus Saboor — Portfolio

A personal React portfolio with a forest-green and sage palette, concise project entries, and self-hosted Manrope.

## Run locally

Use Node.js **22.19 or newer** (`nvm use` selects Node 22).

```sh
npm ci
npm run dev
```

Open http://localhost:4321. Development and preview bind to loopback by default.

```sh
npm run build
npx playwright install firefox
npm test
npm run preview
```

`build/` is the static deployment artifact. No deployment is configured. Only deploy `build/`, never the repository root, which holds private references and retained legacy files.

## Update content

- `app/portfolio.js`: biography, experience, education, contacts, and all eleven projects. Projects contain `id`, `group`, `title`, `summary`, `tags`, `status`, and optional `contribution`/`links`.
- `app/App.jsx`: shared components and homepage sections. `app/styles.css`: visual system and responsive styles.
- `public/images/portrait.webp`: existing portrait; `public/images/jisr-home.webp`: approved screenshot accessible from the Jisr project.

Consult PROFILE.md before changing facts and DESIGN.md before changing appearance. Keep summaries to 25–45 words and tags to four to six supported technologies/skills. Do not infer a personal contribution from a project's methods. Preserve TACIT's accepted/awaiting-publication status and the limited role on circuit sizing.

## Routes and build

Vite uses `app/index.html`, not the retained root `index.html`. Output remains `build/`; tracked `dist/` is legacy material. The post-build script generates static redirects from `/projects/tacit/`, `/projects/tinyml/`, and `/projects/sign-language/` to corresponding `/#project-*` anchors. No client router or server rewrites are needed. The React page requires JavaScript; its fallback supplies a working contact email.

## Verification

`npm test` starts a temporary loopback server serving only `build/`, launches headless Firefox, and checks all projects, content boundaries, local assets, old URLs, navigation, keyboard focus, menu behavior, portrait interaction, reduced motion, and overflow at 320, 390, 768, and 1440 pixels. It closes the server/browser afterward. An existing compatible Playwright Firefox can be supplied using `BROWSER_EXECUTABLE_PATH`.

Set `CAPTURE_REVIEW=1` to capture desktop/mobile screenshots under `.impeccable/review/` (ignored by Git). The production tests and screenshots validate the implementation, not scientific results. Run `git diff --check` before submission.

## Boundaries and assets

No paper/PDF downloads, résumé, DOI link, university email, or unfinished audio player. Thesis copy stays broad; deployment is separate.

The portrait originates from owner-supplied `dist/img/abdussaboor.jpg`; Jisr imagery originates from an approved owner-supplied app screenshot. Both are optimized WebP derivatives, with provenance sidecars. No generated imagery was introduced. Manrope is self-hosted through Fontsource, with its license retained. The old source and vendored legacy libraries are unchanged.
