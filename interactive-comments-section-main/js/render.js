/**
 * DOM rendering — read from state, update the UI.
 * Keep render functions pure where possible (state in, DOM out).
 */

import { getState } from "./state.js";

/**
 * @param {HTMLElement} root — typically #app
 */
export function render(root) {
  const state = getState();
  if (!state) return;

  // TODO: build comment thread markup from state.comments
  root.replaceChildren();
}
