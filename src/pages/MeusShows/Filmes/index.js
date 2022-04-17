import React from "react";
import ".././index.css";
import logo from "../../../assets/image/logo.png";
import Navbar from "../../../components/Sidebar/Navbar";
import Carousel from "../../../components/Carousel/Carousel";
import Search from "../../../components/Search/Search";
import Showsbar from "../../../components/Showsbar/Showsbar";

export default function Filmes() {
  const user_id = localStorage.getItem('@userId');

  return (
    <div className="shows">
      <div className="shows-header">
        <Navbar />
        <img alt="" src={logo} className="logo-header"></img>
        <Search />
      </div>
      <div className="shows-wrapper">
        <Showsbar />
        <div className="gen-recommendations">
          <h2 className="gen-tittle">Minha lista</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url={`https://backend-feudo-roxo.herokuapp.com/meus-shows/filmes?user_id=${user_id}`}
              keyResponse="nao_assistidos"
            />
          </div>
          <h2 className="gen-tittle">Assistidos</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url={`https://backend-feudo-roxo.herokuapp.com/meus-shows/filmes?user_id=${user_id}`}
              keyResponse="assistidos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
