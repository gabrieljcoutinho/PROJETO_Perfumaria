import React from 'react'
import "../CSS/Home/home.css"

import imgHome from "../assets/imgs/imgHomeInicial.png"

const Home = () => {
  return (
    <div className='section'>

          <main className="conteudoInicial">
              <div className="conteudo">
              <h1 className='tituloPrincipal'>Elevate Your Spirit with <br/> Victory Scented Fragrances</h1>
              <p className='paragrafoHomeInicial'>Shop now and embrace the sweet small of victory with Local Face</p>

              <button className="btnDaHomeComprar">Shop Now</button>
              </div>

           <div className="imgPrincipalDiv">
           <img src={imgHome} alt=""  className='imgConteudoPrincipalHome'/>
           </div>

          </main>


    </div>
  )
}

export default Home
