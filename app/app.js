import React from '../react/index.js';

let hasRun = false;

React.registerApp(() => {
    const [user, setUser] = React.useState('Levi');
    const [app, setApp] = React.useState('Todo');

    if (!hasRun) {
        hasRun = true;
        setTimeout(() => {
            setUser('Joe');
            setApp('Node');
        }, 1000);
    }

    return `${user}'s cool ${app} app works!`;
});
