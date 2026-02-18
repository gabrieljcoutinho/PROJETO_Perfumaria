import React from 'react'
import "../../CSS/Blog/primeiroPerfumeBlog.css"

import img1 from "../../assets/imgBlog/imgBlogConteudo.png"



const PrimeiroPerfumeDoBlog = () => {
  return (
    <div className='primeriPerfumeBlog'>

            <div className="img">
            <img src={img1} alt="" className='imgPrimeiraBlog' />
            </div>

            <div className="conteudo">
                    <h3>The Overture: Discovering Your Signature Scent</h3>

                    <p className='conteudoEssencial'>The journey to curating a luxury perfume collection begins with finding your <br/>
                        signature scent — the one that feels like an olfactory extension of your<br/>
                        being. Take time to explore different fragrance families, from opulent<br/>
                         florals to mysterious orientals, to discover the notes that harmonize<br/>
                         perfectly with your skin chemistry. This will be the foundation upon which<br/>
                         you build your enchanting symphony of scents.</p>
            </div>

    </div>
  )
}

export default PrimeiroPerfumeDoBlog