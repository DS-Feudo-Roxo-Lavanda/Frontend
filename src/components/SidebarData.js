import react from "react";
import { icons } from "react-icons";
import { FaBars } from "react-icons/fa"
import { AiOutlineHome } from "react-icons/ai"
import { BiBookBookmark } from "react-icons/bi"
import './Navbar.css'

export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <AiOutlineHome/>,
        cName: 'nav-text' 
    },
    {
        title: 'Meus Shows',
        path: '/MeusShows',
        icon: <BiBookBookmark/>,
        cName: 'nav-text' 
    }
]