/**
 * Application state — single source of truth.
 * Mutate via exported functions; call render() after changes.
 */

/** @type {{ currentUser: object, comments: object[] } | null} */
let appState = null;

export function getState() {
  return appState;
}

export function setState(nextState) {
  appState = nextState;
}
