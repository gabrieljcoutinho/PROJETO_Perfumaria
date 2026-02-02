import React from 'react'
import imgProdutos from "../../../src/assets/imgHome/Frame 280.png"

type Props = {}

const AmostraProdutos = (props: Props) => {
  return (
    <div>     <main className="mainAmostraProdutos">
    <h1 className="tituloProdutos">Beste selling products</h1>
<img src={imgProdutos}  className='imgProdutos' alt="" />
  </main></div>
  )
}

export default AmostraProdutos