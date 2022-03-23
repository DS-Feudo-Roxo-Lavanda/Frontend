import react from "react";
import styles from './index.css'
import logo from "../../assets/image/logo.png"
import Navbar from "../../components/Navbar";


export default function Home() {

    return(
        <div className='home'>
            <div className="home-header">
                <Navbar/>
                <img src={logo} className='logo-header'></img>
            </div>
            <div className="home-wrapper">     
            </div>
        </div>
    )
}