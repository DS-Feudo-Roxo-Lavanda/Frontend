import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home";
import Details from "./pages/Details"
import Filmes from "./pages/MeusShows/Filmes";
import Series from "./pages/MeusShows/Series";
import Favoritos from "./pages/MeusShows/Favoritos";

export default function AppRoutes() {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Login></Login>}/>
            <Route path="/Cadastro" element={<Cadastro></Cadastro>}/>
            <Route path="/Home" element={<Home></Home>}/>
            <Route path="/Details" element={<Details></Details>}/>
            <Route path="/MeusShows/Filmes" element={<Filmes></Filmes>}/>
            <Route path="/MeusShows/Series" element={<Series></Series>}/>
            <Route path="/MeusShows/Favoritos" element={<Favoritos></Favoritos>}/>
          </Routes>
      </Router>
    );
  }