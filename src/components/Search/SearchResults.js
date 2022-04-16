import React from "react";
import { useNavigate, useParams } from "react-router-dom"


const SearchResults = ({results}) => {

    const navigate = useNavigate();

    if (!results || !results.length) return null


    const showList = results.map(({id, title, poster_path, overview, release_date, vote_average, media_type}) => {

        if (!title) {
            return;
        }
       
        return(
        <li key={id} onClick={() => navigate('/Details', {state: {id: id, title: title, poster: poster_path, overview: overview, date: release_date, vote: vote_average, type: media_type}})}>{title}</li>
        )
    })
    
    console.log(results)
    return(
        <div className='search-results'>
            <ul>{showList}</ul>
        </div>
    )
}
export default SearchResults

