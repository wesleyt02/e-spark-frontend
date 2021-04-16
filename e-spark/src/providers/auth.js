import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    
    const [user, setUser] = useState();

    setUser({ name: 'Alef San' })

    return (
        <AuthContext.Provider value={ user }>
            {props.children}
        </AuthContext.Provider>
    )
}