import React from "react";
import { AiOutlineHome } from "react-icons/ai"
import { BiBookBookmark } from "react-icons/bi"
import { BiExit } from "react-icons/bi"
import { BiMovie } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { RiSlideshow3Line } from "react-icons/ri"
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
        cName: 'nav-text my-shows' 
    },
    {
        title: '_____________________________________________',
        path: '',
        cName: 'line' 
    },
    {
        title: 'Filmes',
        path: '/MeusShows/Filmes',
        icon: <BiMovie/>,
        cName: 'nav-text my-movies'
    },
    {
        title: 'Séries',
        path: '/MeusShows/Series',
        icon: <RiSlideshow3Line/>,
        cName: 'nav-text'
    },
    {
        title: 'Favoritos',
        path: '/MeusShows/Favoritos',
        icon: <AiOutlineHeart/>,
        cName: 'nav-text'
    },
    {
        title: 'Sair',
        path: '/',
        icon: <BiExit/>,
        cName: 'nav-text exit'
    },
]