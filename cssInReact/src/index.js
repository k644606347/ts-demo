"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const react_dom_1 = __importDefault(require("react-dom"));
const react_1 = __importDefault(require("react"));
document.addEventListener('DOMContentLoaded', e => {
    let wrapper = document.createElement('div');
    document.body.appendChild(wrapper);
    react_dom_1.default.render(react_1.default.createElement(App_1.App, null, "hello styled-components"), wrapper);
});
