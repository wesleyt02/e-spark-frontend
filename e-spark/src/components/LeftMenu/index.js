import React, { useState } from 'react';

import './leftmenu.css';

import PaginaInicialIcone from '../../images/pagina-inicial-da-web.svg';
import CaminhaoIcone from '../../images/caminhao-de-reboque.svg';
import TelefoneIcone from '../../images/telefone-com-fio.svg';
import ShoppingListoIcone from '../../images/shopping-list.svg';
import CreditCardIcone from '../../images/credit-card.svg';
import PointerIcone from '../../images/pointer.svg';

const LeftMenu = () => {
    const [leftMenu, setLeftMenu] = useState(false);

    function showLeftMenu() {
        window.scrollY >= 70 ? setLeftMenu(true) : setLeftMenu(false);
    }

    window.addEventListener('scroll', showLeftMenu);

    return (
        <div className={leftMenu ? "container-left-menu active" : "container-left-menu"}>
            <ul className="ul-left-menu">
                <li className="li-left-menu">
                    <img src={PaginaInicialIcone} alt=""/>
                </li>
                <li className="li-left-menu">
                    <img src={ShoppingListoIcone} alt=""/>
                </li>
                <li className="li-left-menu">
                    <img src={CreditCardIcone} alt=""/>
                </li>
                <li className="li-left-menu">
                    <img src={CaminhaoIcone} alt=""/>
                </li>
                <li className="li-left-menu">
                    <img src={TelefoneIcone} alt=""/>
                </li>
                <li className="li-left-menu">
                    <img src={PointerIcone} alt=""/>
                </li>
            </ul>
        </div>
    )
}

export { LeftMenu };