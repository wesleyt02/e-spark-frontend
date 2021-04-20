import React from 'react';

import './scrollCategory.css';

import leftArrowIcon from '../../images/left-arrow.svg';
import rightArrowIcon from '../../images/right-arrow.svg';

const ScrollCategory = () => {

    const categoryCars = [
        'Flex',
        'Economico',
        'Esportivo',
        'Luxo',
        'Mini van',
        'Prêmio',
        'SUV'
    ]

    function handleWheel(e) {
        e.deltaY > 0 ? e.target.scrollBy(100, 0) : e.target.scrollBy(-100, 0);
    }

    return (
        <div className="container-scroll-category">
            <img src={leftArrowIcon} alt=""/>
            <div className="scroll-category-item" onWheel={handleWheel}>
                {categoryCars.map((item, index) => <div className="item-scroll" key={index}>{item}</div>)}            
            </div>
            <img src={rightArrowIcon} alt=""/>
        </div>
        
    )
}

export { ScrollCategory };