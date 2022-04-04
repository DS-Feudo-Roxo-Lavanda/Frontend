import react, {useState} from "react";
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
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
                        <li><h3 className="hello_user">Olá, usuário.</h3></li>
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

