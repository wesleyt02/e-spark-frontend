import React from 'react';

import { HeaderMenu } from '../../components/HeaderMenu/';
import { SlideShow } from '../../components/SlideShow/';
import { LeftMenu } from '../../components/LeftMenu/';
import { CardCars } from '../../components/CardCars';

import './home.css';

const Home = () => {
    return (
        <div className="container-home">
            <HeaderMenu />
            <SlideShow />
            <LeftMenu />
            <main>
                <CardCars />
            </main>
            
        </div>
    );
}

export default Home;