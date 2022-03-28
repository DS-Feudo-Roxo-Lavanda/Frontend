import react from "react";
import React, { useEffect, useState } from 'react'
import "./Carousel.css"

export default function Carousel(){
   
   /* const[data, setData] = useState([]);
    useEffect(() => {
        fetch('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos')
            .then((Response) => Response.json())
            .then(setData);
    }, []);

    if (!data || !data.lenth) return null*/

    return(
        <div className='container'>
            <div className='carousel'>
                <div className="show" >
                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/cKNxg77ll8caX3LulREep4C24Vx.jpg" className="image" ></img>    
                    <div className='tittle-wrapper' >
                        {/*<span className="tittle">The Batman</span>*/}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

