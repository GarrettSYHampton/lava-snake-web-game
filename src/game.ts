// Game state skeleton. Snake rules land in milestone 1 (LSWG-2+).
// This module intentionally holds only a placeholder state shape so the
// Vite + TS + Canvas wiring can be verified before any game logic exists.

export interface GameState {
  /** Placeholder tick counter to prove the loop runs. */
  tick: number;
}

export function createInitialState(): GameState {
  return { tick: 0 };
}

export function update(state: GameState): GameState {
  return { tick: state.tick + 1 };
}
