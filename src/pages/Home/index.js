import react from "react";
import styles from './index.css'
import logo from "../../assets/image/logo.png"
import Navbar from "../../components/Navbar";



export default function Home() {

    return(
        <div className='home'>
            <div className="home-header">
                <Navbar/>
                <img src={logo} className='logo-header'></img>
                <input className="search" placeholder="Pesquisar"/>
            </div>
            <div className="home-wrapper">  
                <div className='caurosel'>
                    <div className="show" >
                        <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/cKNxg77ll8caX3LulREep4C24Vx.jpg" className="image"></img>            
                    </div>
                </div>   
            </div>
        </div>
    )
}