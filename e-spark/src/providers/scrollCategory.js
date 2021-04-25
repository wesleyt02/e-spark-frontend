import { createContext, useState } from 'react';

export const ScrollCategoryContext = createContext();

export const ScrollCategoryProvider = (props) => {
    const [nameCategoryActive, setNameCategoryActive] = useState('Todos');

    return (
        <ScrollCategoryContext.Provider value={{ 
            nameCategoryActive,
            setNameCategoryActive
            }}>
                
            {props.children}
        </ScrollCategoryContext.Provider>
    )
}