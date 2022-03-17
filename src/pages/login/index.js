import React from "react";
import './style.css'
import logo from '../../assets/image/logo.png'

export default function Login(){
    return(
        <div className='login'>
            <div className='logo-wrapper'>
                <img src={logo} className='logo'></img>
            </div>
            <div>
                <div>
                    <p>Entre.</p>
                    <input placeholder="Email"/> 
                    <input type='password' placeholder="Senha"/> 
                    <button>Entre</button>
                    <p>Não tem uma conta? Cadastre-se</p>
                </div>
            </div>
        </div>
    )
}