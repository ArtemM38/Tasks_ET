import { subscribe, state } from "./state/store.js";
import { renderApp } from "./utils/dom.js";
import { fetchUsers } from "./state/action.js";

subscribe(renderApp);

renderApp(state);

fetchUsers();