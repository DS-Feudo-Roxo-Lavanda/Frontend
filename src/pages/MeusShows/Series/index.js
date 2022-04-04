import react from "react";
import styles from '.././index.css'
import logo from "../../../assets/image/logo.png"
import Navbar from "../../../components/Sidebar/Navbar";
import Carousel from "../../../components/Carousel/Carousel";
import Search from "../../../components/Search/Search";
import ShowsNavBar from "../ShowsNavBar";


export default function Series() {

    return(
        <div className='shows'>
            <div className="shows-header">
                <Navbar/>
                <img src={logo} className='logo-header'></img>
                <ShowsNavBar />
                <Search/> 
            </div>
            <div className="shows-wrapper">
                <div className='gen-recommendations'>
                    <h2 className="gen-tittle">Séries já assistidas</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/tv?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&without_genres=28&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0'/>
                        </div>
                    <h2 className="gen-tittle">Assistindo atualmente</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate'/>
                        </div>
                    <h2 className="gen-tittle">Watch-list</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate'/>
                        </div>
                </div>  
            </div>
        </div>
    )
}