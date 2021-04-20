import React from 'react';

import { Logout } from '../Logout/index'
import { SearchBar } from '../SearchBar/index';
import './headermenu.css'

import LogoIcon from '../../images/logo.png';
import ContatoIcon from '../../images/contato.svg';
import CompanhiaIcon from '../../images/companhia.svg';

const HeaderMenu = () => {
    return (
        <nav className="container-header-menu">
            <ul className="container-ul-header-menu">
                <li className="ul-li-header-menu">
                    <img src={LogoIcon} alt="logo" />
                </li>
                <li className="ul-li-header-menu">
                    <SearchBar />
                </li>
                <li className="ul-li-header-menu">
                    <ul className="ul-item">
                        <li className="li-item">
                            <img src={ContatoIcon} alt="" />
                            <p className="header-p">Entre em contato</p>
                        </li>
                        <li className="li-item">
                            <img src={CompanhiaIcon} alt="" />
                            <p className="header-p">Quem somos</p>
                        </li>
                        <li className="li-item li-item-account">
                            <Logout />
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export { HeaderMenu };