import React from 'react'
import img8 from "../../assets/imgs/fundoPromocao.png"
type Props = {}

const MainSecaoPromocao = (props: Props) => {
  return (
    <div>
         <main className="mainSecaoPromocao">

<h2 className='tituloPromocao'>Perfume year-End Sale!</h2>

<h3 className="subTituloPromocao">Up to 50% OFF</h3>

<img src={img8} alt="" className='imgPromocao' />
<p className="paragrafoPerfumeEmPromocao">Discover and exquisite collections of premium perfumes at <br/>
umbelievable prices during our exclusive Perfume Sale!</p>
<main className="movimentacaoBtnComprarPerfumePromocao">
<button class="btn-brown">Know More</button>
</main>
</main>
    </div>
  )
}

export default MainSecaoPromocao