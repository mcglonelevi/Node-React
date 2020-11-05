import React from './index.js';

let STATE_CURSOR = 0;
let STATE_MAP = {};

export function useState(initialValue) {
    const stateId = STATE_CURSOR;

    STATE_CURSOR++;

    if (!STATE_MAP[stateId]) {
        STATE_MAP[stateId] = {
            value: initialValue,
            updater: (newValue) => { STATE_MAP[stateId].value = newValue; React.render(); }
        };
    }

    const currentValue = STATE_MAP[stateId];

    return [currentValue.value, currentValue.updater];
}

export function resetStateCursor() {
    STATE_CURSOR = 0;
}
