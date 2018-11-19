"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const react_1 = __importDefault(require("react"));
let StyledInput = styled_components_1.default.input `
    font-size: 17px;
    padding: 2px 5px;
    line-height: 24px;
    border-radius: 5px;
`;
class Input extends react_1.default.PureComponent {
    render() {
        let { readOnly } = this.props;
        return react_1.default.createElement(StyledInput, { readOnly: readOnly });
    }
}
exports.default = Input;
