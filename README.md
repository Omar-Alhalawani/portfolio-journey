# Portfolio Journey

Omar Alhalawani's cinematic, single-page computer-systems portfolio. The page follows a signal through a dark silicon landscape: power-on, verification, physical builds, instrumentation, and handoff.

This is a separate project from `omar-alhalawani-portfolio`. The existing portfolio is a read-only content source and is not modified by this repository.

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
