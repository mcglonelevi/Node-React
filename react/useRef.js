let REF_CURSOR = 0;
let REF_MAP = {};

export function useRef(initialValue) {
    const refId = REF_CURSOR;

    REF_CURSOR++;

    if (!REF_MAP[refId]) {
        REF_MAP[refId] = { current: initialValue };
    }

    return REF_MAP[refId];
}

export function resetRefCursor() {
    REF_CURSOR = 0;
}
