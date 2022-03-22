import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home";

export default function AppRoutes() {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Login></Login>}/>
            <Route path="/Cadastro" element={<Cadastro></Cadastro>}/>
            <Route path="/Home" element={<Home></Home>}/>
          </Routes>
      </Router>
    );
  }