import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login"
import Cadastro from "./pages/Cadastro"

export default function AppRoutes() {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Login></Login>}/>
            <Route path="/cadastro" element={<Cadastro></Cadastro>}/>
          </Routes>
      </Router>
    );
  }