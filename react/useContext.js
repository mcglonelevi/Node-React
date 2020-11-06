let CONTEXT_CURSOR = 0;
let CONTEXT_MAP = {};

export function createContext() {
    const contextId = CONTEXT_CURSOR;

    CONTEXT_CURSOR++;

    const Provider = ({ value, children }) => {
        CONTEXT_MAP[contextId] = value;
        return children();
    };

    return {
        contextId,
        Provider
    };
}

export function useContext({ contextId }) {
    return CONTEXT_MAP[contextId];
}
