# Lava Snake Web Game

Static browser game — classic Snake reskinned with a lava/volcano theme.
Built with TypeScript + Vite + HTML5 Canvas + Tailwind CSS.

## Getting started

Requires Node.js 20+.

```sh
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`) in a browser.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — strict typecheck and emit static files to `dist/`
- `npm run preview` — serve the production build locally
- `npm run typecheck` — strict TypeScript check with no output

## Layout

- `index.html` — page shell: title, `<canvas id="game">`, Tailwind-styled HUD placeholders
- `src/main.ts` — entry point: grabs the canvas, runs the frame loop
- `src/game.ts` — game state skeleton (rules land in milestone 1)
- `src/render.ts` — canvas rendering skeleton (lava theme lands in milestone 2)
- `src/style.css` — Tailwind CSS entry point
