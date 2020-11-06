import React from '../react/index.js';

export const UserContext = React.createContext();

export function UserContextProvider({ children }) {
    return UserContext.Provider({ children, value: React.useState('Levi') });
}
