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
input.className = "ToolIcon_type_checkbox";
input.type = "checkbox";
input.name = "editor-current-shape";
input.setAttribute("aria-label", "Visual Valet");
input.setAttribute("data-testid", "toolbar-visual-valet");

const div = document.createElement("div");
div.className = "ToolIcon__icon";
div.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7"></path><path d="M10 10l.01 0"></path><path d="M14 10l.01 0"></path><path d="M10 14a3.5 3.5 0 0 0 4 0"></path></svg>`;

label.appendChild(input);
label.appendChild(div);

toolbar.appendChild(divider);
toolbar.appendChild(label);

render(<App />, container);
