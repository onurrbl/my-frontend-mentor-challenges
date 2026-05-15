/**
 * Event handling — prefer delegation on a stable parent (e.g. #app).
 */

/**
 * @param {HTMLElement} root
 * @param {() => void} onUpdate — call after state changes to re-render
 */
export function bindEvents(root, onUpdate) {
  root.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    // TODO: handle vote, reply, edit, delete via data attributes or closest()
    void onUpdate;
  });
}
