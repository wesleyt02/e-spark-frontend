import React from 'react';

import UserIcon from '../../images/user.svg';

const Logout = () => {
    return (
        <>  
            <label htmlFor="account-checkbox" className="user-icon-label">
                <img src={UserIcon} alt="" for=""/>
            </label>
            
            <input type="checkbox" id="account-checkbox" hidden />
            <label htmlFor="account-checkbox"> Entrar </ label>
            <ul>
                <li><p>Entrar</p></li>
                <li><p>Criar conta</p></li>
            </ul>
        </>
    )
}

export { Logout };