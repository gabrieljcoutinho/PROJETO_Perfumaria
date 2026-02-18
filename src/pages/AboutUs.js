import React from 'react'
import MarcacaoDepagina from "../../src/UI/AboutUs/MarcacaoDePagina"
import Aboutus from "../../src/UI/AboutUs/AboutUs.jsx"
import OurStory from "../../src/UI/AboutUs/OurStory.jsx"
import AmostraDeBebida from "../../src/UI/AboutUs/AmostraDeBebida.jsx"
import OqueNosFazUnicos from "../../src/UI/AboutUs/OqueNosFazUnicos.jsx"
import  Footer from "../components/Footer.tsx"

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