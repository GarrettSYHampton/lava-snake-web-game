import type { GameState } from './game.ts';

// Rendering skeleton: clears the canvas and paints a placeholder grid so the
// Canvas wiring is verifiable. Real lava-theme rendering lands in milestone 2.

export function render(ctx: CanvasRenderingContext2D, state: GameState): void {
  const { width, height } = ctx.canvas;
  ctx.fillStyle = '#1c1917'; // stone-900, matches canvas bg class
  ctx.fillRect(0, 0, width, height);

  // Placeholder grid to prove per-frame drawing works.
  const cell = 40;
  ctx.strokeStyle = '#292524'; // stone-800
  ctx.lineWidth = 1;
  for (let x = cell; x < width; x += cell) {
    ctx.beginPath();
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, height);
    ctx.stroke();
  }
  for (let y = cell; y < height; y += cell) {
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(width, y + 0.5);
    ctx.stroke();
  }

  // Tick readout proves the update loop is driving renders.
  ctx.fillStyle = '#fb923c'; // orange-400
  ctx.font = '14px ui-monospace, monospace';
  ctx.fillText(`tick: ${state.tick}`, 12, 24);
}
