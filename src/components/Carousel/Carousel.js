import react from "react";
import React, { useEffect, useState, useRef } from 'react'
import "./Carousel.css"
import sliderArrow from "../../assets/image/sliderArrow.png"

export default function Carousel(props){
   
    const[data, setData] = useState([]);
    const carousel = useRef(null);
    useEffect(() => {
        fetch(props.url)
            .then((Response) => Response.json())
            .then((Response) => {
                console.log(Response.results)
                setData(Response.results)
            });
    }, []);

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    

    return(
        <div className='container'>
             <div className='carousel' ref={carousel}>
            {data.map((show) => {
                const {id, title, poster_path } = show;
                return(
                    <div className="show" key={id} >
                        <img src={'https://image.tmdb.org/t/p/w220_and_h330_face' + poster_path} className="image" ></img>    
                        <div className='tittle-wrapper' >
                            <span className="tittle">{title}</span>
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

