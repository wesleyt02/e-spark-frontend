import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './login.css';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({email, password})
        })
        const responseToJson = await response.json();
        
        if(responseToJson.status === false) {
            alert(responseToJson.messageSucess);
        }
    }

    return (
        <div className="container-login">
            <div className="background-blur"></div>
            <div className="container-login-box">
                <p className="close-login">x</p>

                <h2>Login</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">E-mail</label>
                    <input
                        type="text"
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

                    <p>Esqueceu a senha? <a href="/">Redefinir senha</a></p>

                    <input type="submit" value="Entrar" />
                </form>
                <div className="not-account">
                    <p>Ainda não tem uma conta, cadastre-se agora mesmo</p>
                    <Link to="/about"><button>Criar conta</button></Link>
                </div>
            </div>
        </div>

    );
}

export default Login;