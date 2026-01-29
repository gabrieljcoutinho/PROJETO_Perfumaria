import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header/header.css";

import imgLogo from "../assets/imgs/logoPage.png"
import listaIconesHeader from "../assets/imgs/Frame 2.png"

const Header = () => {
  return (
    <header className="header container">
      <ul className="ulHeader">
      <img src={imgLogo} alt="" />
            <li><Link to="/" className="ul-lista">Home</Link></li>
            <li><Link to="/loja" className="ul-lista">Loja</Link></li>
            <li><Link to="/sobrenos" className="ul-lista">Sobre Nós</Link></li>
      </ul>
      <img src={listaIconesHeader} alt="" />
    </header>
  );
};

export default Header;
