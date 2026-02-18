import React from 'react'
import MarcacaoDepagina from "../UI/AboutUs/MarcacaoDePagina"
import Aboutus from "../UI/AboutUs/AboutUs.jsx"
import OurStory from "../UI/AboutUs/OurStory.jsx"
import AmostraDeBebida from "../UI/AboutUs/AmostraDeBebida.jsx"
import OqueNosFazUnicos from "../UI/AboutUs/OqueNosFazUnicos.jsx"
import  Footer from "../components/Footer"

const AboutUs = () => {
  return (
    <div>
        <MarcacaoDepagina />
        <Aboutus />
        <OurStory />
        <AmostraDeBebida />
    <OqueNosFazUnicos/>
        <Footer />
    </div>
  )
}

export default AboutUs