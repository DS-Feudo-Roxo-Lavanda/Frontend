import react from "react";
import React, { useEffect, useState, useRef } from 'react'
import "./Carousel.css"
import sliderArrow from "../../assets/image/sliderArrow.png"

export default function Carousel(){
   
    const[data, setData] = useState([]);
    const carousel = useRef(null);
    useEffect(() => {
        fetch('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos')
            .then((Response) => Response.json())
            .then(setData);
    }, []);

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollRight += carousel.current.offsetWidth;
    }

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    

    return(
        <div className='container'>
             <div className='carousel' ref={carousel}>
            {data.map((show) => {
                const {id, url} = show;
                return(
                    <div className="show" key={id} >
                        <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/cKNxg77ll8caX3LulREep4C24Vx.jpg' className="image" ></img>    
                        <div className='tittle-wrapper' >
                            <span className="tittle">{id}</span>
                        </div>
                    </div>
                );
            })}
            </div>
            <div className='buttons-wrapper'>
                <button className="slider-arrow first-arrow" onClick={handleLeftClick}><img src={sliderArrow} alt='Scroll Left'></img></button>
                <button className="slider-arrow" onClick={handleRightClick}><img src={sliderArrow} alt='Scroll Right'></img></button>
            </div>
            
        </div>
    )
}

