"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Input_1 = __importDefault(require("./Input"));
let Wrapper = styled_components_1.default.div `
    font-size: 14px;
    line-height: 1.2em;
`;
let StyledP = styled_components_1.default.p `
    font-size: 14px;
`;
class App extends react_1.default.PureComponent {
    render() {
        let { children } = this.props;
        return react_1.default.createElement(Wrapper, null,
            children,
            react_1.default.createElement(Input_1.default, { readOnly: true }),
            react_1.default.createElement(StyledP, null));
    }
}
exports.App = App;
