import React, {useState} from "react";
import logo from '../../assets/image/logo.png'
import { Link } from "react-router-dom";
import instance from "../../services/instance";


export default function Login() {

    const[email, setEmail]= useState([])
    const[password, setPassword]= useState([])

    async function handleSubmit(){
        const data = {
            email: email,
            password: password
        }
            
            if (email != '' && password != ''){
                const response = await instance.post('/login', data);

                if(response.status == 200){
                    window.location.href='/home'
                }else{
                    alert('Erro ao logar!')
                }
            }else{
                alert('Por favor, preencha todos os campos!')
            }
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
                        <input 
                        placeholder="Email" 
                        className='input-action first-input'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                        type='password' 
                        placeholder="Senha" 
                        className='input-action'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className button-link>
                        <button className='button-action' onClick={handleSubmit}>Entre</button>
                        <p className="login-action">Não tem uma conta? <Link to='/cadastro' className="link-action">Cadastre-se</Link></p>
                    </div> 
                </div>
            </div>
        </div>
    )
}