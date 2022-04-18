import React from "react";
import ".././index.css";
import logo from "../../../assets/image/logo.png";
import Navbar from "../../../components/Sidebar/Navbar";
import Carousel from "../../../components/Carousel/Carousel";
import Search from "../../../components/Search/Search";
import Showsbar from "../../../components/Showsbar/Showsbar";

export default function Favoritos() {
  const user_id = localStorage.getItem('@userId');

  return (
    <div className="shows">
      <div className="shows-header">
        <Navbar />
        <img alt="" src={logo} className="logo-header"></img>
        <div className='logo'>
        <p className="baroko">Baroko</p>
        </div>
        <Search />
      </div>
      <div className="shows-wrapper">
        <Showsbar />
        <div className="gen-recommendations">
          <h2 className="gen-tittle">Séries Favoritas</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url={`https://backend-feudo-roxo.herokuapp.com/meus-shows/favoritos?user_id=${user_id}`}
              keyResponse="series"
            />
          </div>
          <h2 className="gen-tittle">Filmes Favoritos</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url={`https://backend-feudo-roxo.herokuapp.com/meus-shows/favoritos?user_id=${user_id}`}
              keyResponse="filmes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
