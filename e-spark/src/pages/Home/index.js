import React from 'react';

import { HeaderMenu } from '../../components/HeaderMenu/';
import { SlideShow } from '../../components/SlideShow/';

import './home.css';

const Home = () => {
    return (
        <div className="container-home">
            <HeaderMenu />
            <SlideShow />
        </div>
    );
}

export default Home;