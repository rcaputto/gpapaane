import React from "react";
import Image1 from "../public/images/logoInstagram.png"
import Image2 from "../public/images/logoFacebook.jpg"
import Image3 from "../public/images/pinterest.png"
import Image4 from "../public/images/whatsapp.png"
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <footer>

        <h3 id="socialContact">Redes Sociales</h3>


        <div id='redes'>

          <div className="instagram">
            <img src={Image1} alt="" /><Link to='https://www.instagram.com/gustavopapaaneart/'  >     <p>Instagram</p></Link>
          </div>

          <div className="facebook">
            <img src={Image2} alt="" /><Link to='https://www.facebook.com/gustavo.daniel.39/?locale=es_LA'>  <p>Facebook</p></Link>
          </div>


          <div className="Pinterest">
            <img src={Image3} alt="" /><Link to='https://ar.pinterest.com/gpapaane/'>   <p>Pinterest</p></Link>
          </div>
          <div className="wattsapp">
            <img src={Image4} alt=""
            /><Link to='https://api.whatsapp.com/send?phone=543416150631'> <p>Whatsapp</p>  </Link>
          </div>
        </div>
        <div className="credit">
          <h5>Desarrollado por </h5>
          <Link to='https://www.instagram.com/rodocaputto/'><p>@rodocaputto</p></Link>
        </div>


        {/* <div className="container">
      <div className="row">
        <div className="col ">
        
          <p>Gustavo Papaane Arte contemporáneo. Copyright 2023</p>
    
        </div>
      </div>
    </div> */}

      </footer>
    </>

  )

}

export default Footer