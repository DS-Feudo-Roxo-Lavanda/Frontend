import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png"
import instance from "../../services/instance";


export default function Cadastro() {
    const navigate = useNavigate();
    const[username, setUsername]= useState([])
    const[email, setEmail]= useState([])
    const[password, setPassword]= useState([])

    // useEffect(()=>{
    //     instance.post('/cadastro',{
    //         email: email,
    //         username: username,
    //         password: password
    //     })
    //     .then(function(response){
    //         console.log(response);
    //     })
    //     .catch(function(error){
    //         console.error(error);
    //     })
    // },[])

    async function handleSubmit(){
        const data = {
            username: username,
            email: email,
            password: password
        }
            
            if (username != '' && email != '' && password != ''){
                const response = await instance.post('/cadastro', data);
                if(response.status === 200){
                    navigate('/Home');
                }else{
                    alert('Erro ao cadastrar');
                }
            }else{
                alert('Por favor, preencha todos os campos!');
            }
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
                        <input 
                        placeholder="Usuário"
                        className="input-action first-input"
                        username={username}
                        value={username}
                        onChange={e => setUsername(e.target.value)} />
                        <input 
                        placeholder="Email" 
                        className="input-action first-input" 
                        email={email} 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                        placeholder="Senha" 
                        type="password" 
                        className="input-action" 
                        password={password}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="button-link">
                        <button className="button-action" onClick={handleSubmit}>Criar</button>
                        <p className="login-action">Já possui uma conta? <Link to="/" className="link-action">Entrar</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )

}