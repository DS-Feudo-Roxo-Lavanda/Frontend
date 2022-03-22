import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png"

export default function Cadastro() {
    function handleClick() {
        console.log("Criou!")
    }

    return(
        <div className="login-cadastro">
            <div className="logo-wrapper">
                <img src={logo} className="logo"></img>
            </div>
            <div className="input-wrapper">
                <div className="action-wrapper">
                    <p className="title-login">Crie sua conta.</p>
                    <div className="inputs">
                        <input placeholder="Usuário" className="input-action first-input" />
                        <input placeholder="Email" className="input-action first-input" />
                        <input placeholder="Senha" type="password" className="input-action" />
                    </div>
                    <div className="button-link">
                        <button className="button-action" onClick={() => handleClick()}>Criar</button>
                        <p className="login-action">Ja possui uma conta? <Link to="/" className="link-action">Entrar.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )

}