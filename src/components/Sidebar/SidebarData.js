import react from "react";
import { icons } from "react-icons";
import { FaBars } from "react-icons/fa"
import { AiOutlineHome } from "react-icons/ai"
import { BiBookBookmark } from "react-icons/bi"
import { BiExit } from "react-icons/bi"
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
        path: '/MeusShows/Filmes',
        icon: <BiBookBookmark/>,
        cName: 'nav-text' 
    },
    {
        title: 'Sair',
        path: '/',
        icon: <BiExit/>,
        cName: 'nav-text exit'
    }
]