import React from 'react';
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "../../components/Search/Search";
import logo from "../../assets/image/logo.png"
import styles from "./index.css"
import instance from "../../services/instance";
import { IoStarSharp } from 'react-icons/io5'
import {AiOutlinePlus, AiOutlineEye} from 'react-icons/ai'
import {MdOutlineDone} from 'react-icons/md'
import {FcLike} from 'react-icons/fc'
import {BiArrowBack} from 'react-icons/bi' 


export default function Details(){
    const location = useLocation();
    useEffect(() => {
        console.log(location)
    }) 

    function addToFavs(){
        const fav = instance.post(`/${location.state.type}/${location.state.id}/atualizar/favorito`)
        console.log(location.state.type, location.state.id, fav)
    }

    function addToList(){
        const list = instance.post(`/${location.state.type}/${location.state.id}/atualizar/nao_assistido`)
        console.log(location.state.type, location.state.id, list)
    }
    
    function addToWatched(){
        const watched = instance.post(`/${location.state.type}/${location.state.id}/atualizar/assistido`)
        console.log(location.state.type, location.state.id, watched)
    }

    return(
        <div className='details'>
            
            <div className="shows-header">
                <Link to='/Home' className='return'><BiArrowBack/></Link>
                <img src={logo} className='logo-header'></img>
                <Search/> 
            </div>
            <div className="details-wrapper" style={{backgroundImage: `url(${'https://image.tmdb.org/t/p/w220_and_h330_face'+location.state.poster})`}}>
            </div>
            <div className='data-wrapper'>
                <div>
                    <img src={'https://image.tmdb.org/t/p/w220_and_h330_face' + location.state.poster} className="poster"></img>
                </div>
                <div>
                    <h1 className='text'>{location.state.title}</h1>
                    <p className='text'>{location.state.overview}</p>
                    <div className='data-buttons'>
                        <div>
                            <p className='text'>Avaliação: {location.state.vote}/10  <IoStarSharp/></p>
                            <p className='text'>Data de lançamento: {location.state.type}</p>
                        </div>
                        <div className='action-buttons'>
                            <button className='details-button' onClick={addToList}><AiOutlinePlus/></button>
                            <button className='details-button' onClick={addToWatched}><MdOutlineDone/></button>
                            <button className='details-button' onClick={addToFavs}><FcLike/></button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}