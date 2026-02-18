import React from "react";
import { NavLink } from "react-router-dom"; // Trocado Link por NavLink
import "../CSS/Header/header.css";

import imgLogo from "../assets/imgHome/logoPage.png";
import listaIconesHeader from "../assets/imgHome/Frame 2.png";

const Header = () => {
  return (
    <header className="header container">
      <img src={imgLogo} alt="Logo" className="imgHeader" />

      <ul className="ulHeader">
        <li>
          {/* O 'end' garante que o Home não fique ativo quando estiver em outras rotas */}
          <NavLink to="/" end className="ul-lista">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="ul-lista">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" className="ul-lista">
            About Us
          </NavLink>
        </li>
      </ul>

      <img src={listaIconesHeader} alt="Ícones" className="imgListaIcones" />
    </header>
  );
};

export default Header;