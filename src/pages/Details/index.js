import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Search from "../../components/Search/Search";
import logo from "../../assets/image/logo.png"
import styles from "./index.css"
import Navbar from '../../components/Sidebar/Navbar';



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
            <div className="details-wrapper">
                <img src={'https://image.tmdb.org/t/p/w220_and_h330_face' + location.state.poster} className="poster"></img>
                <h1 className='show-title'>{location.state.title}</h1>
                <p className='show-title'>{location.state.overview}</p>
                <p className='show-title'>{location.state.date}</p>
            </div>
        </div>
    )
}