import React from 'react'
import "../../CSS/Shop/ofertaEspecial.css"

import imgPromocaoPerfume from "../../assets/imgShop/ofertaEspecial.png"

type Props = {}

const OfertaEspecial = (props: Props) => {
  return (
    <div className='divOfertaEspecial'>
        <h1 className='tituloSecaoPrincipal'>Especial Ofers</h1>
           <div className="conteudoEscrito">
            <h3 className='subTituloPromocao'>Limited Time Offer: 20% OFF on Aqua Serenity Perfume!</h3>
            <h5 className='subTitulodoTitulo'>Aqua Serenity</h5>
            <p className='paragrafoConteudoOferta'>Immerse yourself in the calming embrace of Aqua Serenity, a captivating fragrance that evokes the essence of water.</p>
           </div>

           <div className="imgPromocao">
            <img src={imgPromocaoPerfume} alt="" className='imgPromocaoLoja' />
           </div>
        </div>
  )
}

export default OfertaEspecial