import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Carousel.css"
import sliderArrow from "../../assets/image/sliderArrow.png"

export default function Carousel(props){

    const navigate = useNavigate();
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
            <button className="slider-arrow first-arrow" onClick={handleLeftClick}><img src={sliderArrow} alt='Scroll Left'></img></button>
            <div className='carousel' ref={carousel}>
            {data.map((show) => {
                
                const {id, title, poster_path, overview, release_date, vote_average } = show;
                return(
                    <div className="show" key={id} onClick={() => navigate('/Details', {state: {id: id, title: title, poster: poster_path, overview: overview, date: release_date, vote: vote_average}})}>
                        <img src={'https://image.tmdb.org/t/p/w220_and_h330_face' + poster_path} className="image"  ></img>    
                        <div className='tittle-wrapper' >
                            {/*<span className="tittle">{title}</span>*/}
                        </div>
                    </div>
                );
            })}
            </div>
            <button className="slider-arrow second-arrow " onClick={handleRightClick}><img src={sliderArrow} alt='Scroll Right'></img></button> 
        </div>
    )
}

