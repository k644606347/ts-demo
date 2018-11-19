import { App } from "./App";
import ReactDOM from "react-dom";
import React from "react";

document.addEventListener('DOMContentLoaded', e => {
    let wrapper = document.createElement('div');

    document.body.appendChild(wrapper);

    ReactDOM.render(<App>
        hello styled-components
    </App>, wrapper);
})