import React from 'react'
import "../CSS/Home/section.css"
import "../CSS/Home/mainConteudoPrincipal.css"
import "../CSS/Home/btnComprar.css"
import "../CSS/Home/mainBoasVindas.css"
import "../CSS/Home/nossosValores.css"
import "../CSS/Home/amostraProdutosMain.css"
import "../CSS/Home/mainColecoes.css"
import "../CSS/Home/mainSecaoPromocao.css"
import "../CSS/Home/mainPerfumesMaisRecentes.css"




import img9 from "../assets/imgs/imgPerfumesRecentes.png"


import ConteudoInicial from "../UI/Home/ConteudoInicial"
import BoasVindas from "../UI/Home/BoasVindas"
import NossosValores from "../UI/Home/NossosValores"
import AmostraProdutos from "../UI/Home/AmostraProdutos"
import MainColecoes from "../UI/Home/MainColecoes"
import MainSecaoPromocao from "../UI/Home/MainSecaoPromocao"

import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className='section'>

          <ConteudoInicial />

          <BoasVindas />

          <NossosValores />

          <AmostraProdutos />

          <MainColecoes />

          <MainSecaoPromocao />





          <main className="perfumesMaisRecentes">
                  <h2 className='subTituloPerfumesRecente'>Latest Articles</h2>

                  <img src={img9} alt="" className='imgperfumeRecentes' />
          </main>
<br /><br /><br />
          <Footer />

    </div>
  )
}

export default Home
