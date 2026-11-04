import './style.css';
import { createInitialState, update } from './game.ts';
import { render } from './render.ts';

const canvas = document.getElementById('game');
if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error('Missing <canvas id="game"> element');
}

const maybeCtx = canvas.getContext('2d');
if (maybeCtx === null) {
  throw new Error('2D canvas context unavailable');
}
const ctx: CanvasRenderingContext2D = maybeCtx;

let state = createInitialState();

function frame(): void {
  state = update(state);
  render(ctx, state);
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
