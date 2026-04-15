# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm i                  # install dependencies
npm test               # run tests (Web Test Runner, port 2000, with coverage)
npm run test:watch     # run tests in watch mode
npm run lint           # lint JS and CSS
npm run lint:js        # ESLint only
npm run lint:css       # Stylelint only
hlx up                 # start local dev proxy at http://localhost:3000 (requires @adobe/helix-cli globally)
```

To run a single test file:
```sh
npx wtr "test/blocks/hero/*.test.js" --node-resolve --port=2000
```

## Architecture

This is an **Adobe Helix/Franklin (AEM Edge Delivery Services) v7** project. Content is authored in Google Drive (mounted via `fstab.yaml`) and served through Helix's CDN. There is no build step — all code runs natively in the browser as ES modules.

### Page Load Pipeline (`scripts/scripts.js`)

Pages load in three sequential phases:

1. **Eager** — decorates the DOM (buttons, icons, sections, blocks), waits for LCP blocks defined in `LCP_BLOCKS`
2. **Lazy** — loads all blocks' JS/CSS, header, footer, and `lazy-styles.css`; imports `custom.js`
3. **Delayed** — runs after 3 s via `setTimeout`; loads `delayed.js` (Core Web Vitals RUM)

### Block System (`blocks/`)

Each block lives in `blocks/<name>/` with `<name>.js` and `<name>.css`. A block's JS must export a default `decorate(block)` function that transforms the raw two-column table HTML (authored in Google Docs) into the desired DOM structure.

```js
// minimal block example
export default function decorate(block) {
  // block.children contains the authored rows
}
```

`lib-franklin.js` provides utilities used in blocks: `createOptimizedPicture`, `readBlockConfig`, `decorateIcons`, `buildBlock`, etc.

### Header & Footer

`blocks/header/header.js` and `blocks/footer/footer.js` fetch their content from `/nav.plain.html` and `/footer.plain.html` respectively at runtime — these pages are authored documents, not static files.

### Styles

CSS custom properties (design tokens) are defined in `:root` in `styles/styles.css`. Always use these variables rather than hard-coded values. `lazy-styles.css` is loaded in the lazy phase and should contain non-critical styles.

### Content Index

`helix-query.yaml` defines the search/query index at `/query-index.json`. It crawls all pages (excluding `/profiles/**` and `/drafts/**`) and extracts fields: `title`, `description`, `tags`, `date`, `image`, `lastModified`, `robots`.

### Linting Rules

- **ESLint**: airbnb-base, browser globals, Babel parser. Always use `.js` extensions in import paths (`import/extensions: always`).
- **Stylelint**: stylelint-config-standard + stylelint-config-prettier.

## Environments

- Preview: `https://main--helix-pt-01--pat-ffm.aem.page/`
- Live: `https://main--helix-pt-01--pat-ffm.aem.live/`
