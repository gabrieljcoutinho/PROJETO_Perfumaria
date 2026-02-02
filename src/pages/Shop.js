import React from 'react';
// Removida a extensão .tsx da importação
import MarcacaoDePagina from '../UI/Shop/MarcacaoDePagina';
import TituloPrincipalDaPaginaShop from "../UI/Shop/TituloPrincipalDaPaginaShop"

const Shop = () => {
  return (
    <div>
      <MarcacaoDePagina />
      <TituloPrincipalDaPaginaShop />
    </div>
  );
};

export default Shop;