import React from '../react/index.js';
import { UserContext, UserContextProvider } from './UserContext.js';

React.registerApp(() => {
    return UserContextProvider({
        children: () => {
            const [user, setUser] = React.useContext(UserContext);
            const [app, setApp] = React.useState('Todo');
            const hasRun = React.useRef(false);

            React.useEffect(() => {
                console.log('ON MOUNT');
            }, []);

            React.useEffect(() => {
                console.log('EVERY RENDER!!!');
                return () => { console.log('CLEAN UP EVERY RENDER'); };
            });

            React.useEffect(() => {
                console.log(`APP CHANGED: ${app}`);
                return () => { console.log('CLEAN UP APP CHANGE'); };
            }, [app]);

            if (!hasRun.current) {
                hasRun.current = true;
                setTimeout(() => {
                    setUser('Joe');
                }, 1000);

                setTimeout(() => { setApp('Console'); }, 2000)
            }

            return `${user}'s cool ${app} app works!`;
        },
    });
});
