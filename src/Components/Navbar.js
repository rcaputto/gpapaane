import React from "react";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


function Navbar (){
    return (
        
        <header>
        <div className="name_author">
            <h1>Gustavo Papaane</h1>
            <h2>Arte contemporáneo</h2>
            <buttom><FontAwesomeIcon icon={faBars} className='burguerMenu'/></buttom>
        </div>
        <nav>
                <ul>
                <li><a href="/">INICIO</a></li>
                <li><a href="#title">OBRAS</a></li>
                <li><a href="#copy">BIO</a></li>
                <li><a href="#contacto">CONTACTO</a></li>
                </ul>

                <div className='menuMobile'>
                    <div className='burguer'>
                    
                    </div>
                
                </div>
            
        </nav>
        
        
    </header>
    
    )
}

export default Navbar