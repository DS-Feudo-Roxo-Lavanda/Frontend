import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "../../components/Search/Search";
import logo from "../../assets/image/logo.png";
import "./index.css";
import { IoStarSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { BiArrowBack } from "react-icons/bi";
import api from "../../services/instance";

export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  var currentDate = location.state.isMovie ?  new Date(location.state.date).toLocaleString('pt-BR').split(" ")[0] :  new Date(location.state.serie_date).toLocaleString('pt-BR').split(" ")[0];

 
  
  useEffect(() => {
    console.log(location.state);
  }, []);

  const handleWatched = async () => {
    try {
      await api.post(
        `/${location.state.isMovie ? "filme" : "serie"}/${
          location.state.id
        }/atualizar/assistido`,
        {
          user_id: localStorage.getItem("@userId"),
          objeto: location.state.show,
        }
      );

      if (location.state.isMovie) {
        navigate("/MeusShows/Filmes");
      } else {
        navigate("/MeusShows/Series");
      }
    } catch (error) {
      alert(
        `Não foi possível atualizar o status da ${
          location.state.isMovie ? "filme" : "serie"
        }. Tente novamente mais tarde!`
      );
    }
  };

  const handleFavorite = async () => {
    try {
      await api.post(
        `/${location.state.isMovie ? "filme" : "serie"}/${
          location.state.id
        }/atualizar/favorito`,
        {
          user_id: localStorage.getItem("@userId"),
          objeto: location.state.show,
        }
      );

      navigate("/MeusShows/Favoritos");

    } catch (error) {
      alert(
        `Não foi possível atualizar o status para os favoritos. Tente novamente mais tarde!`
      );
    }
  };

  const handleMyList = async () => {
    try {
      await api.post(
        `/${location.state.isMovie ? "filme" : "serie"}/${
          location.state.id
        }/atualizar/nao_assistido`,
        {
          user_id: localStorage.getItem("@userId"),
          objeto: location.state.show,
        }
      );

      navigate("/MeusShows/Favoritos");

      if (location.state.isMovie) {
        navigate("/MeusShows/Filmes");
      } else {
        navigate("/MeusShows/Series");
      }
    } catch (error) {
      alert(
        `Não foi possível atualizar o status da ${
          location.state.isMovie ? "filme" : "serie"
        }. Tente novamente mais tarde!`
      );
    }
  };

  var namesearch = location.state.isMovie ? location.state.title : location.state.name ; 

  return (
    <div className="details">
      <div className="shows-header">
        <Link to="/Home" className="return">
          <BiArrowBack />
        </Link>
        <img alt="" src={logo} className="logo-header"></img>
        <div className='logo'>
        <p className="baroko">Baroko</p>
        </div>
        <Search />
      </div>
      <div
        className="details-wrapper"
        style={{
          backgroundImage: `url(${
            "https://image.tmdb.org/t/p/w220_and_h330_face" +
            location.state.poster
          })`,
        }}
      ></div>
      <div className="data-wrapper">
        <div>
          <img
            alt=""
            src={
              "https://image.tmdb.org/t/p/w220_and_h330_face" +
              location.state.poster
            }
            className="poster"
          ></img>
        </div>
        <div>
          <h1 className="text">{location.state.title}{location.state.name}</h1>
          <p className="text">{location.state.overview}</p>
          <div className="data-buttons">
            <div className="text-wrapper">
              <p className="text">
                Avaliação: {location.state.vote}/10 <IoStarSharp />
              </p>
              <p className="text">Data de lançamento: {currentDate}</p>
              <a href={'https://www.youtube.com/results?search_query='+ namesearch +' Trailer'} target="_blank" className="text trailer">Assista ao trailer</a>
            </div>
            <div className="action-buttons">
              <button onClick={() => handleMyList()} className="details-button">
                <AiOutlinePlus />
              </button>
              <button
                onClick={() => handleWatched()}
                className="details-button"
              >
                <MdOutlineDone />
              </button>
              <button
                onClick={() => handleFavorite()}
                className="details-button"
              >
                <FcLike />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
