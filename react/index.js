import { useState, resetStateCursor } from './useState.js';
import { useRef, resetRefCursor } from './useRef.js';
import { createContext, useContext } from './useContext.js';

class React {
    static APP = null;
    static RENDER_TIMEOUT_REFERENCE = null;

    static registerApp(component) {
        React.APP = component;
        React.render();
    }

    static render() {
        if (React.RENDER_TIMEOUT_REFERENCE) {
            return;
        }

        React.RENDER_TIMEOUT_REFERENCE = setTimeout(() => {
            React.RENDER_TIMEOUT_REFERENCE = null;
            resetStateCursor();
            resetRefCursor();
            console.log(React.APP());
        }, 0);
    }

    static createContext() {
        return createContext();
    }

    static useContext(context) {
        return useContext(context);
    }

    static useState(initialValue) {
        return useState(initialValue);
    }

    static useRef(initialValue) {
        return useRef(initialValue);
    }
}

export default React;
