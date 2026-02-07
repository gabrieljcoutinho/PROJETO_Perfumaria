import React from 'react'
import "../../CSS/Shop/perfumeDeOuro.css"

import imgDeOuro from "../../assets/imgShop/perfumeDeOuro.png"

type Props = {}

const PerfumeDeOuro = (props: Props) => {
  return (
    <div className='mainPerfumeDeOuro'>


          <main className="conteudoDivPerfumeDeOuro">
          <img src={imgDeOuro} alt=""  className='imgPerfumeDeOuro'/>
              <div className="textoConteudoPerfumeDeouro">
                  <h1>Limited Time Offer: 25% OFF <br/> on Golden Algel Perfume</h1>
                  <h2 >Golden Algel</h2>
                  <p className="paragrafoDeOuro">Unleash Your Divine Glow</p>
              </div>
          </main>



    </div>

  )
}

export default PerfumeDeOuro