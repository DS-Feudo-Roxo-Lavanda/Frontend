import React from "react";
import ".././index.css";
import logo from "../../../assets/image/logo.png";
import Navbar from "../../../Components/Sidebar/Navbar";
import Carousel from "../../../Components/Carousel/Carousel";
import Search from "../../../Components/Search/Search";
import Showsbar from "../../../Components/Showsbar/Showsbar";
import Showsbar from "../../../Components/Showsbar/Showsbar";

export default function Series() {
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
          <h2 className="gen-tittle">Minha lista</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url={`https://backend-feudo-roxo.herokuapp.com/meus-shows/series?user_id=${user_id}`}
              keyResponse="nao_assistidos"
            />
          </div>
          <h2 className="gen-tittle">Finalizadas</h2>
          <div className="carousel-wrapper">
            <Carousel
              className="home_carousel"
              url={`https://backend-feudo-roxo.herokuapp.com/meus-shows/series?user_id=${user_id}`}
              keyResponse="assistidos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
