import React from 'react';
import Beige from '../public/images/reactImages/Beige.jpg';
import Beige2 from '../public/images/reactImages/Beige2.jpg';
import CelesteAgua from '../public/images/reactImages/CelesteAgua.jpg';
import MarteRojo from '../public/images/reactImages/MarteRojo.jpg';
import Petroleo from '../public/images/reactImages/Petroleo.jpg';
import Petroleo2 from '../public/images/reactImages/Petroleo2.jpg';
import Turquesa from '../public/images/reactImages/Turquesa.jpg';
import VerdeCascada from '../public/images/reactImages/VerdeCascada.jpg';
import VerdeHoja from '../public/images/reactImages/VerdeHoja.jpg';
import VerdeOscuro from '../public/images/reactImages/VerdeOscuro.jpg';


const images = [Beige, Beige2, CelesteAgua, MarteRojo, Petroleo, Petroleo2, Turquesa,
VerdeCascada, VerdeHoja, VerdeOscuro]

function Obras () {
    return(
        <>
            <div id='ScrollToObras' className = 'container'>
                <div className='title'>
                <h1> OBRAS </h1>
                </div>
                <div className="obras">
                {
                    images.map(image=>{
                        return <img src={image} alt='images'/>
                    })
                }

                    
                    
    </div>
            </div>
        </>
    )
}

export default Obras