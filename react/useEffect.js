let EFFECT_CURSOR = 0;
let EFFECT_MAP = {};
let cleanupQueue = [];

export function useEffect(callback, dependencies) {
    const effectId = EFFECT_CURSOR;

    EFFECT_CURSOR++;

    const lastRun = EFFECT_MAP[effectId];

    let cleanupFunction = null;

    // this handles undefined case and first run
    if (!lastRun || !dependencies) {
        if (lastRun && lastRun.cleanupFunction) {
            lastRun.cleanupFunction();
        }

        EFFECT_MAP[effectId] = {
            dependencies,
            cleanupFunction: callback(),
        };
    } else {
        // this handles subsequent runs
        if (shouldRun(lastRun.dependencies, dependencies)) {
            if (lastRun.cleanupFunction) {
                lastRun.cleanupFunction();
            }

            EFFECT_MAP[effectId] = {
                dependencies,
                cleanupFunction: callback(),
            };
        }
    }

    if (cleanupFunction) {
        cleanupQueue.push();
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
