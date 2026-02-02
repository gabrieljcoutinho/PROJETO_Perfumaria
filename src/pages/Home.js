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





import img8 from "../assets/imgs/fundoPromocao.png"
import img9 from "../assets/imgs/imgPerfumesRecentes.png"


import ConteudoInicial from "../UI/Home/ConteudoInicial"
import BoasVindas from "../UI/Home/BoasVindas"
import NossosValores from "../UI/Home/NossosValores"
import AmostraProdutos from "../UI/Home/AmostraProdutos"
import MainColecoes from "../UI/Home/MainColecoes"

import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className='section'>

          <ConteudoInicial />

          <BoasVindas />

          <NossosValores />

          <AmostraProdutos />

          <MainColecoes />



        <div className="mainSecaoPromocao">

        <h2 className='tituloPromocao'>Perfume year-End Sale!</h2>

        <h3 className="subTituloPromocao">Up to 50% OFF</h3>

    <img src={img8} alt="" className='imgPromocao' />
        <p className="paragrafoPerfumeEmPromocao">Discover and exquisite collections of premium perfumes at <br/>
        umbelievable prices during our exclusive Perfume Sale!</p>
        </div>

      <main className="movimentacaoBtnComprarPerfumePromocao">
      <button class="btn-brown">Know More</button>
      </main>

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
