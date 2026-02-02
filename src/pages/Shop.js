import React from 'react';
// Removida a extensão .tsx da importação
import MarcacaoDePagina from '../UI/Shop/MarcacaoDePagina';
import TituloPrincipalDaPaginaShop from "../UI/Shop/TituloPrincipalDaPaginaShop"
import ListaProdutos from "../UI/Shop/ListaDeProdutos"
import OfertaEspecial from "../UI/Shop/OfertaEspecial"



const Shop = () => {
  return (
    <div>
      <MarcacaoDePagina />
      <TituloPrincipalDaPaginaShop />
      <ListaProdutos />
      <OfertaEspecial />


    </div>
  );
};

export default Shop;