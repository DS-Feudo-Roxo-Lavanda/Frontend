import React from "react";
import style from './style.css';
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png"

export default function Cadastro() {
    return(
        <div className="Cadastro">
            <div className="logo-wrapper">
                <img src={logo} className="logo"></img>
            </div>
            <div className="input-wrapper">
                <div className="action-wrapper">
                    <p className="title-signup">Crie sua conta.</p>
                    <input placeholder="Usuário" />
                    <input placeholder="Email" />
                    <input placeholder="Senha" type="password" />
                    <button />
                </div>
            </div>
        </div>
    )

}