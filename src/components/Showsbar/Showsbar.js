import react from "react";
import { Link } from "react-router-dom";
import styles from "./Showsbar.css"

export default function Showsbar() {
    
    return (
        <div>
            <div className='shows-tabs'>
                <div className='movies-tab'>
                    <Link to="/MeusShows/Filmes">Filmes</Link>
                </div>
                <div className='movies-tab'>
                    <Link to="/MeusShows/Series">Séries</Link> 
                </div>
                <div className='movies-tab'>
                    <Link to="/MeusShows/Favoritos">Favoritos</Link> 
                </div>
            </div>
        </div>




        /*<ul className="list">
            <li className="shows-nav-text">
               <Link to="/MeusShows/Filmes">Filmes</Link> 
            </li>
            <li className="shows-nav-text">
               <Link to="/MeusShows/Series">Series</Link> 
            </li>
            <li className="shows-nav-text">
               <Link to="/MeusShows/Favoritos">Favoritos</Link> 
            </li>
        </ul>*/
    )
}