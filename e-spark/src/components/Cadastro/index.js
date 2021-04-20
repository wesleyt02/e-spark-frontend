import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../providers/auth';

import './cadastro.css';

const Cadastro = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { isCadastroActive, setIsCadastroActive } = useContext(AuthContext);

    async function handleCloseCadastro() {
        setIsCadastroActive(false);
    }

    return (
        <>
            {isCadastroActive ?
                <div className="container-login">
                    <div className="background-blur"></div>
                    <div className="container-login-box cadastrar">
                        <p className="close-login" onClick={handleCloseCadastro}>x</p>

                        <h2>Criar conta</h2>

                        <form onSubmit={''}>

                            <div className="names">
                                <div className="collumn2">
                                    <label htmlFor="fname">Primeiro nome</label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        placeholder="Digite o seu nome"
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="collumn2">
                                    <label htmlFor="fname">Segundo nome</label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        placeholder="Digite o seu primeiro nome"
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>

                            <label htmlFor="fname">Nome de usuário</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Digite o seu nome de usuário"
                                onChange={(e) => setEmail(e.target.value)} />


                            <label htmlFor="fname">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite o seu e-mail"
                                onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="lname">Senha</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Digite a sua senha"
                                onChange={(e) => setPassword(e.target.value)} />

                            <input type="submit" value="Entrar" />
                        </form>
                        <div className="not-account">
                            <p>Ainda não tem uma conta, cadastre-se agora mesmo</p>
                            <Link to="/about"><button>Criar conta</button></Link>
                        </div>
                    </div>
                </div>
                : null}
        </>
    );
}

export { Cadastro };