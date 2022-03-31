import react from "react";
import styles from './index.css'
import logo from "../../assets/image/logo.png"
import Navbar from "../../components/Sidebar/Navbar";
import CarouselTop10 from "../../components/Carousel/CarouselTop10";
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
                <div className="top10-wrapper" >
                    <CarouselTop10 url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate'/>
                </div>
                <div className='gen-recommendations'>
                    <h2 className="gen-tittle">Séries</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/tv?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&without_genres=28&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0'/>
                        </div>
                    <h2 className="gen-tittle">Animações</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate'/>
                        </div>
                        <h2 className="gen-tittle">Ação</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate'/>
                        </div>
                    <h2 className="gen-tittle">Aventura</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate'/>
                        </div>
                    <h2 className="gen-tittle">Comédia</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate'/>
                        </div>
                    <h2 className="gen-tittle">Drama</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate'/>
                        </div>
                    <h2 className="gen-tittle">Ficção Científica</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate'/>
                        </div>
                    <h2 className="gen-tittle">Terror</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate'/>
                        </div>
                </div>  
            </div>
        </div>
    )
}