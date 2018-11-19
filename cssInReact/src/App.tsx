import React from "react";
import styled from "styled-components";
import Input from "./Input";

let Wrapper = styled.div`
    font-size: 14px;
    line-height: 1.2em;
`;
let StyledP = styled.p`
    font-size: 14px;
`;
export class App extends React.PureComponent {
    render() {
        let { children } = this.props;
        return <Wrapper>
            { children }
            <Input readOnly={true} />
            <StyledP />
        </Wrapper>;
    }
}
