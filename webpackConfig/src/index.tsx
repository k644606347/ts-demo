import "@babel/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "./components/Button";

console.log(''.padStart(4, '^'));
class App extends React.PureComponent<any, any>{
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            hello typescript;
            <Button onClick={e => {
                console.log(e.target);
            }}>ok</Button>
            <Button type={"primary"}>primary</Button>
            <Button type={'danger'}>danger</Button>
        </div>
    }
}

let wrapper = document.createElement('div');
document.addEventListener('DOMContentLoaded', e => {
    document.body.appendChild(wrapper);
});

ReactDOM.render(<App />, wrapper);