import React from 'react';

import exempleCarIcon from '../../images/exemple-car.png';

import './cardcars.css'

const CardCars = ({ id, title, description, typeCar }) => {
    return (
        <div className={"container-card-cars " + typeCar}>
            <div className="title-car">
                <p className={"namecar " + typeCar}>{title}</p>
            </div>
            <div className="image-car">
                <img src={exempleCarIcon} alt="carro" />
            </div>
            <div className="description-car">
                <p>{description}</p>
            </div>
            <div className="footer-card-car">
                <button className={typeCar} id={id}>Sobre</button>
                <button className={typeCar} id={id}>Alugar</button>
            </div>
        </div>
    )
}

export { CardCars };