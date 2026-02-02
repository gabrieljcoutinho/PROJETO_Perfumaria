import React from 'react'
import img1 from "../../../src/assets/imgs/Group 14.png"
import img2 from "../../../src/assets/imgs/wcwsc 1.png"
import img3 from "../../../src/assets/imgs/Group 17.png"
import img4 from "../../../src/assets/imgs/Nele_he_perfume_You_or_some_one_like_you_of_Etat_Libre_dOrange__daa24d6d-5e28-424b-93f9-0fbcc7e774fd 1.png"
import img5 from "../../../src/assets/imgs/Old fashion black & gold color perfume bottles set 1.png"
import img6 from "../../../src/assets/imgs/kuroswan972_I_want_to_create_a_cube_stunning_photo_of_the_Mysti_14ae08f2-16bb-4e85-b781-bf371c99faf1 2.png"
import img7 from "../../../src/assets/imgs/NOUILLEPASCUITE_Perfum_modern_shoot_for_vogue_rectangular_shot__036e3104-df47-445e-956e-04f1978997e2 1.png"

type Props = {}

const MainColecoes = (props: Props) => {
  return (
    <div>

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
    </div>
  )
}

export default MainColecoes