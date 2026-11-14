# Portfolio Journey

Omar Alhalawani's cinematic, single-page computer-systems portfolio. The page follows a signal through a dark silicon landscape: power-on, verification, physical builds, instrumentation, and handoff.

This is a separate project from `omar-alhalawani-portfolio`. The existing portfolio is a read-only content source and is not modified by this repository.

## Credit and inspiration

The continuous cinematic journey and chapter-based world were inspired by **Omar Ibrahim's Dreamscape portfolio**. Full creative credit for that original concept and reference implementation belongs to Omar Ibrahim.

- Explore Omar Ibrahim's work: [omaribrahim.me](https://omaribrahim.me/)
- View his portfolio source: [omaribrahim6/personal-portfolio](https://github.com/omaribrahim6/personal-portfolio)

Please check out his work. This repository is an independent computer-systems interpretation built for Omar Alhalawani and does not claim authorship of Omar Ibrahim's original Dreamscape concept. See [CREDITS.md](CREDITS.md).

## Stack

- Astro and TypeScript
- Procedural Canvas 2D world with DOM-based content
- CSS motion with reduced-motion support
- No baked text in imagery or canvas

## Run

```bash
npm install
npm run dev
```

## Design rules

- All meaningful text remains selectable HTML.
- Canvas and SVG illustrations are decorative and text-free.
- The background carries atmosphere; signal animation stays inside engineering systems.
- Motion stops or becomes instant under `prefers-reduced-motion`.
