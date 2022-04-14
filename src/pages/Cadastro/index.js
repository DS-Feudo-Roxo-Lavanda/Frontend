import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png"
import instance from "../../services/instance";


export default function Cadastro() {

    const[username,setUsername]= useState([])
    const[email,setEmail]= useState([])
    const[password,setPassword]= useState([])

    useEffect(()=>{
        instance.post('/cadastro',{
            email: email,
            username: username,
            password: password
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.error(error);
        })
    },[])
    



    return(
        <div className="login-cadastro">
            <div className="logo-wrapper">
                <img src={logo} className="logo"></img>
            </div>
            <div className="input-wrapper">
                <div className="action-wrapper">
                    <p className="title-login">Crie sua conta.</p>
                    <div className="inputs">
                        <input placeholder="Usuário" className="input-action first-input" username={username} />
                        <input placeholder="Email" className="input-action first-input" email={email} />
                        <input placeholder="Senha" type="password" className="input-action" password={password} />
                    </div>
                    <div className="button-link">
                        <button className="button-action" >Criar</button>
                        <p className="login-action">Já possui uma conta? <Link to="/" className="link-action">Entrar</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )

}