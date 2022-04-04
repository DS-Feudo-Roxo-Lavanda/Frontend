import react from "react";
import { Link } from "react-router-dom";

export default function ShowsNavBar() {
    
    return (
        <ul className="list">
            <li className="shows-nav-text">
               <Link to="/MeusShows/Filmes">Filmes</Link> 
            </li>
            <li className="shows-nav-text">
               <Link to="/MeusShows/Series">Series</Link> 
            </li>
            <li className="shows-nav-text">
               <Link to="/MeusShows/Favoritos">Favoritos</Link> 
            </li>
        </ul>
    )
}