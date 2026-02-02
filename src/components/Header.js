import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header/header.css";

import imgLogo from "../assets/imgs/logoPage.png"
import listaIconesHeader from "../assets/imgs/Frame 2.png"

const Header = () => {
  return (
    <header className="header container">
      <img src={imgLogo} alt="Logo" className="imgHeader" />
      <ul className="ulHeader">
        {/* Ajustado para bater com o path="/" do AppRoutes */}
        <li><Link to="/" className="ul-lista">Home</Link></li>
        <li><Link to="/shop" className="ul-lista">Shop</Link></li>
      </ul>
      <img src={listaIconesHeader} alt="Ícones" className="imgListaIcones" />
    </header>
  );
};

export default Header;
