# portfolio

Source for my personal site, [esh-07.github.io/portfolio](https://esh-07.github.io/portfolio/).

It's React 19 on Vite, with no component library. The look is deliberately plain: IBM Plex Mono, 2px rules, link-blue accents. All of the copy lives in `src/data/content.js`, so updating experience or projects never touches a component. Ctrl/⌘+K opens a command palette for jumping between sections. The theme follows the OS setting until you toggle it, and after that it remembers your choice.

```bash
npm install
npm run dev       # local dev server
npm run deploy    # builds and pushes dist/ to the gh-pages branch
```

`vite.config.js` sets `base: '/portfolio/'`. If the repo is ever renamed, that value has to change too.
