import React, { useContext, useRef } from 'react';

import { ScrollCategoryContext } from '../../providers/scrollCategory';

import leftArrowIcon from '../../images/left-arrow.svg';
import rightArrowIcon from '../../images/right-arrow.svg';

import './scrollCategory.css';

const ScrollCategory = () => {
    const { setNameCategoryActive } = useContext(ScrollCategoryContext);
    const scrollRef = useRef(null);
    const categoryValueName = useRef(null);

    const categoryCars = [
        'Flex',
        'Economico',
        'Esportivo',
        'Flex',
        'Economico',
        'Esportivo',
        'Luxo',
        'Mini van',
        'Prêmio',
        'SUV'
    ]

    function handleClickRight() {
        scrollRef.current.scrollBy(100, 0);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    }

    function handleClickLeft() {
        scrollRef.current.scrollBy(-100, 0);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    }

    return (
        <div className="container-scroll-category">
            <img src={leftArrowIcon} alt="" onClick={handleClickLeft}/>
            <div className="scroll-category-item" ref={scrollRef}>
                {categoryCars.map((item, index) => (
                    <div className="item-scroll" key={index} >
                        <p ref={categoryValueName} onClick={(e) => setNameCategoryActive(e.target.textContent)} >{item}</p>
                    </div>
                ))}
            </div>
            <img src={rightArrowIcon} alt="" onClick={handleClickRight} />
        </div>

    )
}

export { ScrollCategory };