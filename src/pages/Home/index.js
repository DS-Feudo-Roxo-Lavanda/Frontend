import React from "react";
import "./index.css";
import logo from "../../assets/image/logo.png";
import Navbar from "../../Components/Sidebar/Navbar"
import CarouselTop10 from "../../Components/Carousel/CarouselTop10"
import Carousel from "../../Components/Carousel/Carousel";
import Search from "../../Components/Search/Search";

export default function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <Navbar />
        <img alt="" src={logo} className="logo-header" ></img>
        <div className='logo'>
        <p className="baroko">Baroko</p>
        </div>
        <Search />
      </div>
      <h2 className="gen-tittle first-tittle">Em alta</h2>
      <div className="home-wrapper">
        <div className="top10-wrapper">
          <CarouselTop10 url="https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate" />
        </div>
        <div className="gen-recommendations">
         
          <h2 className="gen-tittle">Animações</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url="https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate"
            />
          </div>
          <h2 className="gen-tittle">Ação</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url="https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_genres=28&with_watch_monetization_types=flatrate"
            />
          </div>
          <h2 className="gen-tittle">Aventura</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url="https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate"
            />
          </div>
          <h2 className="gen-tittle">Comédia</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url="https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate"
            />
          </div>
          <h2 className="gen-tittle">Drama</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url="https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate"
            />
          </div>
          <h2 className="gen-tittle">Ficção Científica</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url="https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate"
            />
          </div>
          <h2 className="gen-tittle">Terror</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url="https://api.themoviedb.org/3/discover/movie?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
