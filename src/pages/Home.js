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


import ConteudoInicial from "../UI/Home/ConteudoInicial"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className='section'>

          <ConteudoInicial />

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
<br /><br /><br />
          <Footer />

    </div>
  )
}

export default Home
