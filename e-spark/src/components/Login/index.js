import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../providers/auth';

import './login.css';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { isLoginActive, setIsLoginActive } = useContext(AuthContext);

    function closeModaLogin (){
        setIsLoginActive(false);
        console.log(isLoginActive);
    }

    async function handleSubmit(e) {
        /* e.preventDefault();
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
        } */
    } 

    return (
        <>

        {isLoginActive ? 
            <div className={isLoginActive? "container-login" : "container-login animation-close"}>
                <div className="background-blur"></div> 
                <div className="container-login-box">
                    <p className="close-login" onClick={closeModaLogin}>X</p>

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
                        
                        <div className="recovery-password">
                            <p>Esqueceu a senha? <a href="/">Redefinir senha</a></p>
                        </div>
                        

                        <input type="submit" value="Entrar" />
                    </form>
                    <div className="not-account">
                        <p>Ainda não tem uma conta, cadastre-se agora mesmo</p>
                        <Link to="/about"><button>Criar conta</button></Link>
                    </div>
                </div>
            </div>                  
        : 
        null}
        </>
    );
}

export { Login };