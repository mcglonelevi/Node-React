import React from '../react/index.js';
import { UserContext, UserContextProvider } from './UserContext.js';

React.registerApp(() => {
    return UserContextProvider({
        children: () => {
            const [user, setUser] = React.useContext(UserContext);
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
        },
    });
});
