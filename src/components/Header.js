import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header/header.css";

import imgLogo from "../assets/imgs/logoPage.png"

const Header = () => {
  return (
    <header className="header container">
      <ul className="ulHeader">
      <img src={imgLogo} alt="" />
            <li><Link to="/">Home</Link></li>
            <li><Link to="/loja">Loja</Link></li>
            <li><Link to="/contato">Contato</Link></li>
      </ul>

    </header>
  );
};

export default Header;
