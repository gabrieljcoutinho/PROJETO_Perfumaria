import React from 'react';
// Removida a extensão .tsx da importação
import MarcacaoDePagina from '../UI/Shop/MarcacaoDePagina.jsx';
import TituloPrincipalDaPaginaShop from "../UI/Shop/TituloPrincipalDaPaginaShop"
import ListaProdutos from "../UI/Shop/ListaDeProdutos"
import OfertaEspecial from "../UI/Shop/OfertaEspecial"
import PerfumeDeOuro from "../UI/Shop/PerfumeDeOuro"
import Footer from "../components/Footer"



const Shop = () => {
  return (
    <div>
      <MarcacaoDePagina />
      <TituloPrincipalDaPaginaShop />
      <ListaProdutos />
      <OfertaEspecial />
      <PerfumeDeOuro />

<Footer />
    </div>
  );
};

export default Shop;