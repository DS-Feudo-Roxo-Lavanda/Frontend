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
                <h2 className="gen-tittle">Lançamentos</h2>
                    <Carousel className="home_carousel"/>
                <h2 className="gen-tittle">Animações</h2>
                    <Carousel className="home_carousel"/>
                <h2 className="gen-tittle">Ação e Aventura</h2>
                    <Carousel className="home_carousel"/>
                <h2 className="gen-tittle">Comédias</h2>
                    <Carousel className="home_carousel"/>
                <h2 className="gen-tittle">Drama</h2>
                    <Carousel className="home_carousel"/>
                <h2 className="gen-tittle">Terror</h2>
                    <Carousel className="home_carousel"/>
            </div>
        </div>
    )
}