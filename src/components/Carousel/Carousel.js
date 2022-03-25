import react from "react";
import { useEffect } from "react"; 
import "./Carousel.css"

export default function Carousel(){

   /* 
   Função pra buscar os dados no json
   */

    return(
        <div className='carousel'>
            <div className="show" >
                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/cKNxg77ll8caX3LulREep4C24Vx.jpg" className="image" ></img>    
                <div className='tittle-wrapper' >
                    <span className="tittle">The Batman</span>  
                </div>
            </div>
        </div>
    )
}

