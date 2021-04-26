import React, { useContext } from 'react';

import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { LeftMenu } from '../../components/LeftMenu';
import { Cadastro } from '../../components/Cadastro/';
import { Login } from '../../components/Login/';

import { AuthContext } from '../../providers/auth'

import './aboutcar.css';

const AboutCar = () => {

    const { isLoginActive, isCadastroActive } = useContext(AuthContext);

    return (
        <div className="container-about-car">
            <HeaderMenu />
            <LeftMenu />
            <div className="image-car">
                <img src="https://2.bp.blogspot.com/-G3yr-uFuiz0/WaBbF6Mfy-I/AAAAAAAA9V4/jk7TyRiVC94iGV6OKprmByhIz90xHW0rQCLcBGAs/s1600/%25285%2B2%2B-25%2529.jpg" alt="" />
                <div className="title-car">
                    <div>
                        <label>Name</label>
                        <h2>Modelo</h2>
                    </div>
                </div>
            </div>

            <div className="about-car-description">
                <h3> Energia para renovar sua vida </h3>
                <p>Evolução é adaptação. E para ser realmente novo, o Bolt EV se adapta perfeitamente às exigências da sua rotina. Conheça o carro 100% elétrico da Chevrolet e descubra novos caminhos, com os mais avançados recursos de tecnologia e segurança, além de um amplo e confortável espaço interno e um design mais arrojado e moderno.</p>
            </div>

            <div className="about-car-datasheet">
                <div className="datasheet-title">
                    <h1>Ficha Tecnica</h1>
                </div>
                <div className="about-datasheet">
                    <p>Categoria</p>
                    <p>Hatch/Impact</p>
                </div>
                <div className="about-datasheet">
                    <p>Autonomia</p>
                    <p>Até 383 km</p>
                </div>
                <div className="about-datasheet">
                    <p>Tempo de carga</p>
                    <p>9,3h</p>
                </div>
                <div className="about-datasheet">
                    <p>Velocidade Máxima</p>
                    <p>145 km/h</p>
                </div>
                <div className="about-datasheet">
                    <p>Aceleração</p>
                    <p>0 - 100 km/h em 6.5s</p>
                </div>
                <div className="about-datasheet">
                    <p>Potência</p>
                    <p>203 cv</p>
                </div>
                <div className="about-datasheet">
                    <p>Peso</p>
                    <p>1.641 kg</p>
                </div>
                <div className="about-datasheet">
                    <p>Tração</p>
                    <p>Dianteira</p>
                </div>
                <div className="about-datasheet">
                    <p>Transmissão</p>
                    <p>Automatica d 6 machast</p>
                </div>
                <div className="about-datasheet">
                    <p>Ocupantes</p>
                    <p>5</p>
                </div>
                <div className="about-datasheet">
                    <p>Capacidade</p>
                    <p>478L</p>
                </div>
            </div>
            <div className="about-btn-rent">
                <button className="btn-back">voltar</button>
                <button className="btn-back-rent">Alugar veículo</button>
            </div>
            <Footer />
            {isLoginActive ? <Login /> : null}
            {isCadastroActive ? <Cadastro /> : null}
        </div>
    )
}

export { AboutCar };