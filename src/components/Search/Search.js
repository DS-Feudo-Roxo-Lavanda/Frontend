import react from "react"
import styles from './Search.css'

export default function Search(){
    return(
        <div className='container'>
            <div className='search-wrapper'>
                <input className="search" placeholder="Pesquisar"/>
                <div className='search-results'>
                    <ul>
                        <li>Flime 1</li>
                        <li>Flime 2</li>
                        <li>Flime 3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}