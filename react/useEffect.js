let EFFECT_CURSOR = 0;
let EFFECT_MAP = {};

export function useEffect(callback, dependencies) {
    const effectId = EFFECT_CURSOR;

    EFFECT_CURSOR++;

    const oldDependencies = EFFECT_MAP[effectId];

    // this handles undefined case and first run
    if (!oldDependencies) {
        EFFECT_MAP[effectId] = dependencies;
        callback();
    } else {
        // this handles subsequent runs
        if (shouldRun(oldDependencies, dependencies)) {
            EFFECT_MAP[effectId] = dependencies;
            callback();
        }
    }
}

export function resetEffectCursor() {
    EFFECT_CURSOR = 0;
}

function shouldRun(oldDependencies, newDependencies) {
    for (let i = 0; i < oldDependencies.length; i++) {
        if (oldDependencies[i] !== newDependencies[i]) {
            return true;
        }
    }

    return false;
}
