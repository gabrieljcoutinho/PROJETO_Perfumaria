import React from 'react'
import "../CSS/Home/section.css"
import "../CSS/Home/mainConteudoPrincipal.css"
import "../CSS/Home/btnComprar.css"
import "../CSS/Home/mainBoasVindas.css"
import "../CSS/Home/nossosValores.css"
import "../CSS/Home/amostraProdutosMain.css"
import "../CSS/Home/mainColecoes.css"
import "../CSS/Home/mainSecaoPromocao.css"
import "../CSS/Home/mainPerfumesMaisRecentes.css"

import Footer from "../components/Footer"

import imgHome from "../assets/imgs/imgHomeInicial.png"
import imgNossosValores from "../assets/imgs/imgNossosValores.png"
import imgProdutos from "../assets/imgs/Frame 280.png"

import img1 from "../assets/imgs/Group 14.png"
import img2 from "../assets/imgs/wcwsc 1.png"

import img3 from "../assets/imgs/Group 17.png"
import img4 from "../assets/imgs/Nele_he_perfume_You_or_some_one_like_you_of_Etat_Libre_dOrange__daa24d6d-5e28-424b-93f9-0fbcc7e774fd 1.png"

import img5 from "../assets/imgs/Old fashion black & gold color perfume bottles set 1.png"
import img6 from "../assets/imgs/kuroswan972_I_want_to_create_a_cube_stunning_photo_of_the_Mysti_14ae08f2-16bb-4e85-b781-bf371c99faf1 2.png"
import img7 from "../assets/imgs/NOUILLEPASCUITE_Perfum_modern_shoot_for_vogue_rectangular_shot__036e3104-df47-445e-956e-04f1978997e2 1.png"


import img8 from "../assets/imgs/fundoPromocao.png"


import img9 from "../assets/imgs/imgPerfumesRecentes.png"


const Home = () => {
  return (
    <div className='section'>

          <main className="conteudoInicial">
              <div className="conteudo">
              <h1 className='tituloPrincipal'>Elevate Your Spirit with <br/> Victory Scented Fragrances</h1>
              <p className='paragrafoHomeInicial'>Shop now and embrace the sweet small of victory with Local Face</p>




              <button class="button3">
  <span class="btn-text">Shopp Now</span>
  <div class="icon-container">
    <svg viewBox="0 0 24 24" class="icon card-icon">
      <path
        d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z"
        fill="currentColor"
      ></path>
    </svg>
    <svg viewBox="0 0 24 24" class="icon payment-icon">
      <path
        d="M2,17H22V21H2V17M6.25,7H9V6H6V3H18V6H15V7H17.75L19,17H5L6.25,7M9,10H15V8H9V10M9,13H15V11H9V13Z"
        fill="currentColor"
      ></path>
    </svg>
    <svg viewBox="0 0 24 24" class="icon dollar-icon">
      <path
        d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
        fill="currentColor"
      ></path>
    </svg>

    <svg viewBox="0 0 24 24" class="icon wallet-icon default-icon">
      <path
        d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"
        fill="currentColor"
      ></path>
    </svg>

    <svg viewBox="0 0 24 24" class="icon check-icon">
      <path
        d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>




              </div>

           <div className="imgPrincipalDiv">
           <img src={imgHome} alt=""  className='imgConteudoPrincipalHome'/>
           </div>

          </main>


        <main className="boasVindasAoSite">
            <h2 className='subtituliMainBoasVindas'>Welcome to Local Face</h2>

          <p className="textoMainBoasvindas">
            Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire.  <br />
            Our curated collection, aptly named "Victory Scented," is a celebration of success and elegance, designed to unleash your<br />
            victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements.<br />
            At Local Face, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable
            fragrances that elevate your spirit and empower your journey.</p>

        </main>

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


          <main className="mainAmostraProdutos">
            <h1 className="tituloProdutos">Beste selling products</h1>
        <img src={imgProdutos}  className='imgProdutos' alt="" />
          </main>


        <main className="mainColecoes">

            <h2 className="mainColecoesPerfumeTitulo">Our Colections</h2>

            <div className="colecoesPerfumesLista">


      <div className="perfumes">
      <img src={img1} alt="" className='imgPerfume' />
      </div>


              <div className="perfumes">
              <img src={img2} alt=""  className='imgPerfume2'/>
              <p className='nomeSegundoPerfume'>Travel Essentials Collections</p>
              </div>
            </div>


            <div className="perfumesSecao2">
            <div className="perfumes">
              <img src={img3} alt="" className='img3Perfumes'/>
            </div>

            <div className="perfumes" >
              <img src={img4} alt="" className='img4Perfumes'/>
              <p className='nomePerfume4Lista'>Sensations Senasations Collections</p>
              </div>

              </div>

          <div className="perfumesSecao3">
          <div className="perfumes">
            <img src={img5} alt="" className='img5'/>
            <p className='pImg5'>Vintage Treasures Collections</p>
          </div>

          <div className="perfumes">
            <img src={img6} alt="" className='img6'/>
            <p className='pImg6'>limited Ediiton Treasures</p>
          </div>

          <div className="perfumes">
            <img src={img7} alt="" className='img7'/>
            <p className='pImg7'>Modern Classics Collecitons</p>
          </div>
          </div>

        </main>


        <div className="mainSecaoPromocao">

        <h2 className='tituloPromocao'>Perfume year-End Sale!</h2>

        <h3 className="subTituloPromocao">Up to 50% OFF</h3>

    <img src={img8} alt="" className='imgPromocao' />
        <p className="paragrafoPerfumeEmPromocao">Discover and exquisite collections of premium perfumes at <br/>
        umbelievable prices during our exclusive Perfume Sale!</p>
        </div>

      <main className="movimentacaoBtnComprarPerfumePromocao">
      <button class="btn-brown">Know More</button>
      </main>

          <main className="perfumesMaisRecentes">
                  <h2 className='subTituloPerfumesRecente'>Latest Articles</h2>

                  <img src={img9} alt="" className='imgperfumeRecentes' />
          </main>

          <Footer />

    </div>
  )
}

export default Home
