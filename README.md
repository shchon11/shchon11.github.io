# Seonghyun Chon

Personal research portfolio and curriculum vitae: **https://shchon11.github.io/**

A responsive, English/Korean static site with selected research, competition experience, education, and a downloadable two-page CV. Built with semantic HTML, CSS, and plain JavaScript. No package installation or build step is required.

## Preview

From this repository:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. GitHub Pages publishes the root of `main`; `.nojekyll` keeps the files static.

## Update

- English content and links: `index.html`.
- Korean translations: the `korean` dictionary in `script.js`. Keep `data-i18n` keys aligned.
- Visual styles and responsive layouts: `style.css`, `media.css`, and `interactions.css`.
- Organization dialogs and project/gallery filters: `interactions.js`.
- Field-gallery captions and media: `field-media.js`, the matching cards in `index.html`, and `assets/field/`. Keep keys synchronized.
- Downloadable CV: replace `assets/Seonghyun-Chon-CV.pdf`.
- Update the date in the footer and `sitemap.xml` when making substantive content changes.

The page works in English without JavaScript. Language preference is kept only in the visitor's browser. Fonts and project imagery are hosted locally. No analytics or third-party scripts are included.

## Content and assets

See [CONTENT_SOURCES.md](CONTENT_SOURCES.md) for factual scope and public project sources. Project demonstrations are labeled as simulation where applicable. The field gallery separately presents original competition and workshop media, with bilingual captions and a keyboard-navigable viewer.

Manrope and Space Grotesk are distributed under the SIL Open Font License; copies are included in `assets/`. The CV uses Lato.
