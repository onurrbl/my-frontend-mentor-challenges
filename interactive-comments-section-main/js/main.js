import { setState } from "./state.js";
import { render } from "./render.js";
import { bindEvents } from "./events.js";

const app = document.querySelector("#app");

async function init() {
  if (!app) {
    console.error("Missing #app element");
    return;
  }

  const response = await fetch("./data.json");
  if (!response.ok) {
    throw new Error(`Failed to load data.json (${response.status})`);
  }

  const data = await response.json();
  setState(data);

  bindEvents(app, () => render(app));
  render(app);
}

init().catch((error) => {
  console.error(error);
  if (app) {
    app.textContent = "Could not load comments. Are you running a local dev server?";
  }
});
