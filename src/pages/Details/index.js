import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Search from "../../components/Search/Search";
import logo from "../../assets/image/logo.png"
import styles from "./index.css"
import Navbar from '../../components/Sidebar/Navbar';
import { IoStarSharp } from 'react-icons/io5'



export default function Details(){
    const location = useLocation();
    useEffect(() => {
        console.log(location)
    }) 
    return(
        <div className='details'>
            <div className="shows-header">
                <Navbar/>
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
                            <p className='text'>Data de lançamento: {location.state.date}</p>
                        </div>
                        <div className='action-buttons'>
                            <button>B1</button>
                            <button>B2</button>
                            <button>B3</button>
                            <button>B4</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}