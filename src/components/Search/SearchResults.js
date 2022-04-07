import React from "react";
import { useNavigate, useParams } from "react-router-dom"


const SearchResults = ({results}) => {

    const navigate = useNavigate()
    

    if (!results || !results.length) return null

    const showList = results.map(({id, title}) => {

        if (!title) {
            return;
        }

        return(
        <li key={id} onClick={() => navigate()}>{title}</li>
        )
    })

    return(
        <div className='search-results'>
            <ul>{showList}</ul>
        </div>
    )
}
export default SearchResults

