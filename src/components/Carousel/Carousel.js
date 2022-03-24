import react from "react";
import { useEffect } from "react"; 
import "./Carousel.css"

export default function Carousel(){

   /* 
   Função pra buscar os dados no arquivo json
   */

    return(
        <>
            <div className='caurosel'>
                <div className="show" >
                    <div className='img-title'>
                        <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/cKNxg77ll8caX3LulREep4C24Vx.jpg" className="image" ></img>    
                        <p className="title">The Batman</p>       
                    </div>
                </div>
            </div>
        </>
    )
}

