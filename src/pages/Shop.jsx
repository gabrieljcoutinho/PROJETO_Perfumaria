import React from 'react';
// Removida a extensão .tsx da importação
import MarcacaoDePagina from '../UI/Shop/MarcacaoDePagina.jsx';
import TituloPrincipalDaPaginaShop from "../UI/Shop/TituloPrincipalDaPaginaShop.jsx"
import ListaProdutos from "../UI/Shop/ListaDeProdutos.jsx"
import OfertaEspecial from "../UI/Shop/OfertaEspecial.jsx"
import PerfumeDeOuro from "../UI/Shop/PerfumeDeOuro.jsx"
import Footer from "../components/Footer.jsx"



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