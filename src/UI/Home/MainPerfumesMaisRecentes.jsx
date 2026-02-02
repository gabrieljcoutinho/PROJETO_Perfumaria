import React from 'react'

import img9 from "../../assets/imgHome/imgPerfumesRecentes.png"

type Props = {}

const MainPerfumesMaisRecentes = (props: Props) => {
  return (
    <div>
            <main className="perfumesMaisRecentes">
                  <h2 className='subTituloPerfumesRecente'>Latest Articles</h2>

                  <img src={img9} alt="" className='imgperfumeRecentes' />
          </main>
    </div>
  )
}

export default MainPerfumesMaisRecentes