import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [isLoginActive, setIsLoginActive] = useState(false);
    const [isCadastroActive, setIsCadastroActive] = useState(false);

    return (
        <AuthContext.Provider value={{ 
            isLoginActive, 
            setIsLoginActive,
            isCadastroActive, 
            setIsCadastroActive }}>
                
            {props.children}
        </AuthContext.Provider>
    )
}