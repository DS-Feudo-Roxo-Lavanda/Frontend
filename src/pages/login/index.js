import React from "react";
import './style.css'
import logo from '../../assets/image/logo.png'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className='login'>
            <div className='logo-wrapper'>
                <img src={logo} className='logo'></img>
            </div>
            <div className="input-wrapper">
                <div className="action-wrapper">
                    <p className="title-login">Entre.</p>
                    <input placeholder="Email" className='input-action' />
                    <input type='password' placeholder="Senha" className='input-action' />
                    <button className='button-action'>Entre</button>
                    <p className="sign-action">Não tem uma conta? <Link to='/' className="link-action">Cadastre-se</Link></p>
                </div>
            </div>
        </div>
    )
}