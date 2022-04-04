import react from "react";
import styles from '.././index.css'
import logo from "../../../assets/image/logo.png"
import Navbar from "../../../components/Sidebar/Navbar";
import Carousel from "../../../components/Carousel/Carousel";
import Search from "../../../components/Search/Search";
import Showsbar from "../../../components/Showsbar/Showsbar";


export default function Filmes() {

    return(
        <div className='shows'>
            <div className="shows-header">
                <Navbar/>
                <img src={logo} className='logo-header'></img>
                <Search/> 
            </div>
            <div className="shows-wrapper">
                <Showsbar />
                <div className='gen-recommendations'>
                    <h2 className="gen-tittle">Não Assistidos</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate'/>
                        </div>
                    <h2 className="gen-tittle">Assistidos</h2>
                        <div className="carousel-wrapper">
                            <Carousel className="home_carousel" url='https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate'/>
                        </div>
                </div>  
            </div>
        </div>
    )
}