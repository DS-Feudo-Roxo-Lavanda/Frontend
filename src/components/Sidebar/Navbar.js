import React, {useState} from "react";
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './Navbar.css'

export default function Navbar(){
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return(
        <div>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    
                    <ul className='nav-menu-itens' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                        </li>
                        {SidebarData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
        </div>
    )
}

