import React from '../react/index.js';

React.registerApp(() => {
    const [user, setUser] = React.useState('Levi');
    const [app, setApp] = React.useState('Todo');
    const hasRun = React.useRef(false);

    if (!hasRun.current) {
        hasRun.current = true;
        setTimeout(() => {
            setUser('Joe');
            setApp('Node');
        }, 1000);
    }

    return `${user}'s cool ${app} app works!`;
});
