import React from 'react'
import "../../CSS/About/diferencial_module.css";

type Props = {}

const OqueNosFazUnicos = (props: Props) => {
  return (
    <div className='diferencial'>
        <h3 className="tituloOqueNosFazDiferentes">What Makes Us Unique</h3>

            <ul className="conteudoUnicos">
                    <li>
                        <h4 className='subtituloListaOqueFazUnicosListaItens'>Locally Inspired</h4>
                        <p className="paragrafoOqueFazUnidos">


                        Our perfumes are meticulously crafted to reflect the cultural heritage, traditions, and landscapes of various regions. From the vibrant streets of Marrakech to the serene cherry blossom gardens of Kyoto, each fragrance tells a unique story that resonates with its origin

                        </p>
                    </li>

                    <li>
                        <h4 className='subtituloListaOqueFazUnicosListaItens'>High-Quality Ingredients</h4>
                        <p className="paragrafoOqueFazUnidos">


                        We believe that the key to an extraordinary scent lies in the quality of ingredients. That's why we collaborate with expert perfumers who source the finest and ethically-sourced materials from around the world. We never compromise on the quality of our products, ensuring a long-lasting and luxurious experience.

                        </p>
                    </li>

                    <li>
                        <h4 className='subtituloListaOqueFazUnicosListaItens'>Personalized service</h4>
                        <p className="paragrafoOqueFazUnidos">


                        We understand that choosing the perfect scent is a deeply personal experience. Our team of fragrance experts is always ready to assist you in finding a fragrance that complements your personality and style. Whether you're exploring new scents or seeking to rediscover an old favorite, we're here to guide you every step of the way.

                        </p>
                    </li>

            </ul>

            <main className="paragrafoComplemento">
                    <p className="conteudoSecundario">
                    Join us on this olfactory adventure as we celebrate the diverse tapestry of scents from around the world. <br/> Discover the captivating aromas that embrace the essence of local cultures and connect with
                    the beauty of our shared humanity.
                    </p>

                    <p className="conteudoSecundario">
                    Thank you for being a part of our journey.
                    </p>

                    <p className="conteudoSecundario">
                    With love and gratitude,
                    <br />
                    The Local Face Perfumes Team
                    </p>
            </main>

        </div>
  )
}

export default OqueNosFazUnicos