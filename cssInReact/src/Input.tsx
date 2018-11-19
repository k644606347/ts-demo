import styled from "styled-components";
import React from "react";

let StyledInput = styled.input`
    font-size: 17px;
    padding: 2px 5px;
    line-height: 24px;
    border-radius: 5px;
`;
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    
}
export default class Input extends React.PureComponent<InputProps> {
    render() {
        let { readOnly } = this.props;

        return <StyledInput readOnly={readOnly} />
    }
}