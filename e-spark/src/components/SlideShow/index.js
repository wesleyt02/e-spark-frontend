import React, { useState } from 'react';

import './slideshow.css'

import LeftArrowIcon from '../../images/left-arrow.svg';
import RightArrowIcon from '../../images/right-arrow.svg';

const SlideShow = () => {

    const imagens = [
        'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1518987048-93e29699e79a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ]

    const [current, setCurrent] = useState(Number());
    const [length] = useState(imagens.length);

    function nextRight()  {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current);
    }

    function nextLeft() {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current);
    }

    return (
        <div className="container-slide-show">
            <img src={imagens[current]} alt={'images'} className="cars-img-slide-show"/>
            <img src={LeftArrowIcon} alt="left-arrow-icon" className="arrow-icon left" onClick={nextLeft}  />
            <img src={RightArrowIcon} alt="right-arrow-icon" className="arrow-icon right" onClick={nextRight}/>
        </div>
    )
}

export { SlideShow };