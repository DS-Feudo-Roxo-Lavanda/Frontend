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
                    <div className="carousel-wrapper">
                        <Carousel className="home_carousel" url='https://api.themoviedb.org/3/movie/11/recommendations?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&page=1'/>
                    </div>
                <h2 className="gen-tittle">Animações</h2>
                    <div className="carousel-wrapper">
                        <Carousel className="home_carousel" url='https://api.themoviedb.org/3/movie/12/recommendations?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&page=1'/>
                    </div>
                <h2 className="gen-tittle">Ação e Aventura</h2>
                    <div className="carousel-wrapper">
                        <Carousel className="home_carousel" url='https://api.themoviedb.org/3/movie/18/recommendations?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&page=1'/>
                    </div>
                <h2 className="gen-tittle">Comédia</h2>
                    <div className="carousel-wrapper">
                        <Carousel className="home_carousel" url='https://api.themoviedb.org/3/movie/14/recommendations?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&page=1'/>
                    </div>
                <h2 className="gen-tittle">Drama</h2>
                    <div className="carousel-wrapper">
                        <Carousel className="home_carousel" url='https://api.themoviedb.org/3/movie/20/recommendations?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&page=1'/>
                    </div>
                <h2 className="gen-tittle">Terror</h2>
                    <div className="carousel-wrapper">
                        <Carousel className="home_carousel" url='https://api.themoviedb.org/3/movie/27/recommendations?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&page=1'/>
                    </div>
                    
            </div>
        </div>
    )
}