import React from 'react';
// Removida a extensão .tsx da importação
import MarcacaoDePagina from '../UI/Shop/MarcacaoDePagina';
import TituloPrincipalDaPaginaShop from "../UI/Shop/TituloPrincipalDaPaginaShop"
import ListaProdutos from "../UI/Shop/ListaDeProdutos"
import OfertaEspecial from "../UI/Shop/OfertaEspecial"
import PerfumeDeOuro from "../UI/Shop/PerfumeDeOuro"



const Shop = () => {
  return (
    <div>
      <MarcacaoDePagina />
      <TituloPrincipalDaPaginaShop />
      <ListaProdutos />
      <OfertaEspecial />
      <PerfumeDeOuro />


    </div>
  );
};

export default Shop;