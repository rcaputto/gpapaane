import React from "react";
import Image from '../public/images/pexels-steve-johnson-1843716.jpg'

function MainImage (){
    return (
        <section id="title">
        <article id="mainSection">
            <img src={Image} alt=""/>
        </article>
        <h1 className="copy">
            Arte Contemporáneo
        </h1>
    </section>
    )

}

export default MainImage