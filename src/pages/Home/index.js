import react from "react";
import styles from './index.css'
import logo from "../../assets/image/logo.png"
import Navbar from "../../components/Sidebar/Navbar";
import Carousel from "../../components/Carousel/Carousel";



export default function Home() {

    return(
        <div className='home'>
            <div className="home-header">
                <Navbar/>
                <img src={logo} className='logo-header'></img>
                <input className="search" placeholder="Pesquisar"/>
            </div>
            <div className="home-wrapper">  
                 <Carousel/>
                 <Carousel/>
            </div>
        </div>
    )
}