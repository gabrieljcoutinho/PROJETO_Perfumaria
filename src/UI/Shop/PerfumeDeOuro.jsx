import React from 'react'
import "../../CSS/Shop/perfumeDeOuro.css"

import imgDeOuro from "../../assets/imgShop/perfumeDeOuro.png"

type Props = {}

const PerfumeDeOuro = (props: Props) => {
  return (
    <div className='mainPerfumeDeOuro'>


          <main className="conteudoDivPerfumeDeOuro">
              <div className="textoConteudoPerfumeDeouro">
                  <h1 className='tituloPrincipalSecaoPerfumeDeOuro'>Limited Time Offer: 25% OFF  on Golden Algel Perfume</h1>
                  <h2 className='tituloPerfumeDeOuro'>Golden Algel</h2>
                  <p className="paragrafoDeOuro">Unleash Your Divine Glow</p>
                  <p className='paragrafoDescricao'>Indulge in the divine allure of Golden Angel, a fragrance that embodies celestial elegance and radiance.</p>
              </div>
              <img src={imgDeOuro} alt=""  className='imgPerfumeDeOuro'/>
              <button class="btn-transparente">Clique Aqui</button>
          </main>



    </div>

  )
}

export default PerfumeDeOuro