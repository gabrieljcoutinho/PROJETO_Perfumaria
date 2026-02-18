import React from 'react'
import "../../CSS/Shop/listaProdutos.css"
import "../../CSS/Shop/flexBox.css"

import img1 from "../../assets/imgShop/perfumeLoja1.png"
import img2 from "../../assets/imgShop/perfumeLoja2.png"
import img3 from "../../assets/imgShop/perfumeLoja3.png"
import img4 from "../../assets/imgShop/perfumeLoja4.png"
import img5 from "../../assets/imgShop/perfumeLoja5.png"
import img6 from "../../assets/imgShop/perfumeLoja6.png"
import img7 from "../../assets/imgShop/perfumeLoja7.png"
import img8 from "../../assets/imgShop/perfumeLoja8.png"
import img9 from "../../assets/imgShop/perfumeLoja9.png"
import img10 from "../../assets/imgShop/perfumeLoja10.png"
import img11 from "../../assets/imgShop/perfumeLoja11.png"
import img12 from "../../assets/imgShop/perfumeLoja12.png"


const ListaDeProdutos = () => {
  return (
    <div className='listaDeProdutos'>

      {/* Primeiro Bloco */}
      <div className="flexBox">
        <div className="divConteudo">
          <img src={img1} alt="Perfume 1"  className='img'/>
            <h3 className='tituloDosPerfumesLista'>Luxurius Elixir Rough</h3>
        </div>

        <div className="divConteudo">
          <img src={img2} alt="Perfume 2" className='img'/>
          <h3 className='tituloDosPerfumesLista'>The Golden legacy</h3>
        </div>

        <div className="divConteudo">
          <img src={img3} alt="Perfume 3" className='img'/>
          <h3 className='tituloDosPerfumesLista'>Luxurious Elixir</h3>
        </div>

        <div className="divConteudo">
          <img src={img4} alt="Perfume 4" className='img'/>
          <h3 className='tituloDosPerfumesLista'>Luxurius Essence</h3>
        </div>

      </div>

      {/* Segundo Bloco */}
      <div className="flexBox">

        <div className="divConteudo">
          <img src={img5} alt="Perfume 5" className='img'/>
          <h3 className='tituloDosPerfumesLista'>Aurum Aura</h3>
        </div>

        <div className="divConteudo">
          <img src={img6} alt="Perfume 6" className='img'/>
          <h3 className='tituloDosPerfumesLista'>Gleaming Gilt</h3>
        </div>

        <div className="divConteudo">
          <img src={img7} alt="Perfume 7" className='img'/>
          <h3 className='tituloDosPerfumesLista'>Gilden Elixir Rough</h3>
        </div>

        <div className="divConteudo">
          <img src={img8} alt="Perfume 8" className='img'/>
          <h3 className='tituloDosPerfumesLista'>Golden Luminary</h3>
        </div>

      </div>

      {/* Terceiro Bloco */}
      <div className="flexBox">
        <div className="divConteudo">
          <img src={img9} alt="Perfume 9" className='img'/>
          <h3 className='tituloDosPerfumesLista'>Decadent Opal</h3>
        </div>

        <div className="divConteudo">
          <img src={img10} alt="Perfume 10" className='img'/>
          <h3 className='tituloDosPerfumesLista'>Gilden Elixir</h3>
        </div>

        <div className="divConteudo">
          <img src={img11} alt="Perfume 11" className='img'/>
          <h3 className='tituloDosPerfumesLista'>Glamourus Gilt</h3>
        </div>

        <div className="divConteudo">
          <img src={img12} alt="Perfume 12" className='img'/>
          <h3 className='tituloDosPerfumesLista'>Luxury Enigma</h3>
        </div>
      </div>



    </div>
  )
}

export default ListaDeProdutos