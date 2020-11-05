import { useState, resetStateCursor } from './useState.js';

class React {
    static APP = null;

    static registerApp(component) {
        React.APP = component;
        React.render();
    }

    static render() {
        resetStateCursor();
        console.log(React.APP());
    }

    static useState(initialValue) {
        return useState(initialValue);
    }
}

export default React;
