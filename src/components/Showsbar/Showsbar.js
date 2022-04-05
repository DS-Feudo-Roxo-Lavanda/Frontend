import react from "react";
import { Link } from "react-router-dom";
import styles from "./Showsbar.css"

export default function Showsbar() {
    
    return (
        <div>
            <div className='show-tabs'>
                        <Link to="/MeusShows/Filmes"><button className='show-button'>Filmes</button></Link>
                        <Link to="/MeusShows/Series"><button className='show-button'>Séries</button></Link>
                        <Link to="/MeusShows/Favoritos"><button className='show-button'>Favoritos</button></Link>
            </div>
        </div>
    )
}