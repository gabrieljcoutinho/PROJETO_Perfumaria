import React from 'react'
import "../../CSS/About/aboutUs.css"

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className='aboutUsSection'>
                <div className="titulo">
                <h1>About US</h1>
                </div>

                <br /><br /><br />

       <div className="paragrafo">
       <p>At Local Face, we believe that perfumes are more than just scents; they are expressions of one's individuality and style.
        Our passion for exquisite fragrances led us to curate a collection that captures the essence of diverse personalities, bringing you an unparalleled olfactory experience.</p>
       </div>
    </div>
  )
}

export default AboutUs