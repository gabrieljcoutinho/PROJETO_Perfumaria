import React from 'react'
import imgNossosValores from "../../../src/assets/imgsHome/imgNossosValores.png"

type Props = {}

const NossosValores = (props: Props) => {
  return (
    <div>
                 <main className="nossosValores">
            <img src={imgNossosValores} className='imgNossosValores' alt="" />
              <div className="conteudoNossosValores">
          <h2 className='titutloNossoValores'>Our Values</h2>


      <div className="conteudoDosParagrafos">
            <p className="nossoValoresParagrafo">
                At Local Face, our perfume retail store is built on a foundation of passion and authenticity.
                 We believe in celebrating the individuality of every customer, providing a diverse collection
                 of scents that resonate with their unique personality and style. Our dedicated team of fragrance
                  enthusiasts is committed to creating a welcoming and inclusive environment, where connections are forged, and inspiration thrives.
                </p>


                <p className="nossoValoresParagrafo">
                Embracing sustainability and continuous learning, Local Face strives to be more than just a shopping destination; we are a community that inspires and empowers individuals on their fragrance journey.
                  </p>

      </div>

              </div>

          </main>
    </div>
  )
}

export default NossosValores