import "./index.css";

import App from "./App";
import { render } from "preact";

const container = document.createElement("div");
container.id = "visual-valet-container";
document.body.appendChild(container);

const toolbar = document.querySelector(".Island > .Stack_horizontal");

// Add divider between other tools and the custom drawer button
const divider = document.createElement("div");
divider.className = "App-toolbar__divider";

// Code for the drawer button
const label = document.createElement("label");
label.className = "ToolIcon Shape";
label.title = "Visual Valet — cmd or ctrl";
label.id = "visual-valet-button";

const input = document.createElement("input");
input.className = "ToolIcon_type_radio ToolIcon_size_medium";
input.type = "radio";
input.name = "editor-current-shape";
input.setAttribute("aria-label", "Visual Valet");
input.setAttribute("aria-keyshortcuts", "cmd or ctrl");
input.setAttribute("data-testid", "toolbar-visual-valet");

const div = document.createElement("div");
div.className = "ToolIcon__icon";
div.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 5m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M9 12h-7"></path><path d="M15 12h7"></path></svg>`;

label.appendChild(input);
label.appendChild(div);

toolbar.appendChild(divider);
toolbar.appendChild(label);

render(<App />, container);
