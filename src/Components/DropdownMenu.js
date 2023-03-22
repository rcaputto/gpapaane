import React from 'react';
import "../public/styles/DropdownMenu.css"
import logo from "../public/images/gp.png"
import {useState} from 'react';




function DropdownMenu (){
const[isActive, setIsActive] = useState (false);
const handleClick = event =>{
        setIsActive(current => !current)
    }

    const ScrollToBio = () => {
        const element = document.getElementById('bio');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };




    
    
    return (
        <body>
        <header>
            <div className="nav-bar sticky">
            <nav>
            <img className="logo" src={logo} alt="logo"/>
                    <div id="menu-desktop">
                        <a href="home">Home</a>
                        <a href="#bio" onClick={ScrollToBio}>Bio</a>
                        <a href="#ScrollToObras">Obras</a>
                        <a href="#socialContact">Contacto</a>
                    </div>
                    <div id="menu-mobile" >
                        <div id="burguer" >
                            <span id='line1'className={isActive? 'active1' :''} onClick ={handleClick}></span>
                            <span id='line2'className={isActive? 'active2' :''} onClick ={handleClick}></span>
                            <span id='line3'className={isActive? 'active3' :''} onClick ={handleClick}></span>
                        </div>
                        <div id='mobile'>
                        <a href="home" className={isActive? 'open' :'hidden'} onClick ={handleClick}>Home</a>
                        <a href="#bio" className={isActive? 'open' :'hidden'} onClick ={handleClick}>Bio</a>
                        <a href="#ScrollToObras" className={isActive? 'open' :'hidden'} onClick ={handleClick}>Obras</a>
                        <a href="#socialContact" className={isActive? 'open' :'hidden'} onClick ={handleClick}>Contacto</a>
                    </div>
                    
                    </div>
                </nav>
            </div>
        </header>
        
        
    </body>
    
    )
    
}

export default DropdownMenu