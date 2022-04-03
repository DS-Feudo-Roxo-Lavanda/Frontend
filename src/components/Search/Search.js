import react from "react"
import styles from './Search.css'

export default function Search(){
    return(
        <div className='container'>
            <div className='search-wrapper'>
                <input className="search" placeholder="Pesquisar"/>
                <div className='search-results'>
                    <ul>
                        <li>Filme 1</li>
                        <li>Filme 2</li>
                        <li>Filme 3</li>
                        <li>Filme 4</li>
                        <li>Filme 5</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}