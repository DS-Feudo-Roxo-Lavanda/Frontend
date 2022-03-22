import React from "react";
import logo from '../../assets/image/logo.png'
import { Link } from "react-router-dom";

export default function Login() {
    function handleClick(){
        console.log('Logou!')
    }
    
    return (
        <div className='login-cadastro'>
            <div className='logo-wrapper'>
                <img src={logo} className='logo'></img>
            </div>
            <div className="input-wrapper">
                <div className="action-wrapper">
                    <p className="title-login">Entre.</p>
                    <div className="inputs">
                        <input placeholder="Email" className='input-action first-input'/>
                        <input type='password' placeholder="Senha" className='input-action' />
                    </div>
                    <div className button-link>
                        <button className='button-action' onClick={() => handleClick()}>Entre</button>
                        <p className="login-action">Não tem uma conta? <Link to='/cadastro' className="link-action">Cadastre-se</Link></p>
                    </div> 
                </div>
            </div>
        </div>
    )
}