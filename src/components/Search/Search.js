import react from "react";
import  {useState} from 'react';
import styles from './Search.css';
import SearchResults from "./SearchResults";

/*https://api.themoviedb.org/3/search/multi?api_key=5914e1c087d0360b477c8b0ceee
77bff&language=pt-BR&query=<<aqui vai o que ta no search>>&page=1&include_adult=false*/

export default function Search(){

    const [results, setResults] = useState([])
    const handleInputChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        if (!value) return;

        const url = `https://api.themoviedb.org/3/search/multi?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&query=${value}&page=1&include_adult=false`
        
        fetch(url)
        .then((response) => response.json())
        .then(({results}) => setResults(results))
    }

    console.log(results)

    return(
        <div className='container'>
            <div className='search-wrapper'>
                <input className="search" placeholder="Pesquisar" onChange={handleInputChange}/> 
                <SearchResults results={results}/>
            </div>
           
        </div>
    )
}