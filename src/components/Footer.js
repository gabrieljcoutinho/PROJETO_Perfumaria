import React from 'react'
import "../../src/CSS/Footer/index.css"

const Footer = () => {
  return (
    <div className='Footer'>


            <h4>Local Face</h4>

    <p className='seInscrever'>Subscribe to  Our Newlsetter</p>

        <p className='subTexto'>Receive update on New Arrivals and  Special Promotions</p>


             <div className="todasAsListas">
             <div className="listas  categoria">
                  <h5>Categorias</h5>
                <ul className='listaDasCategorias'>
                  <li>Fasshion</li>
                  <li>Jewelry</li>
                  <li>Sports</li>
                  <li>Electronics</li>
                  <li>Indoor</li>
                </ul>
              </div>


              <div className="listas  shopping">
                  <h5>Shopping</h5>
                <ul>
                  <li>Payments</li>
                  <li>Delivery options</li>
                  <li>Buyer preotection</li>
                </ul>
              </div>

              <div className="listas  custumer">
                  <h5>Customer care</h5>
                  <li>Help center</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy policy</li>
                  <li>Returns & refund</li>
                  <li>Survey & feddback</li>
                <ul></ul>
              </div></div>


        </div>
  )
}

export default Footer