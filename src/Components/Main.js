import React from "react";
import Image1 from '../public/images/author.jpg';
import Image2 from '../public/images/verde.jpg';
import Image4 from '../public/images/au.jpg';
import Image5 from '../public/images/autor.jpg';



function Main (){
    return (
<section>
        <div className="row">
            <div className="col col-md-6 offset-3">
            <article id="pictures">
            <div className = 'row'>
                <div className = 'col'>
                
                <div className="box"></div>
                <img className="autor" src={Image1} alt="" />
                
                
                </div>
                
            </div>
            </article >
            <div id="bio">   
                <article id="copy">
                    <h3 >
                        Soy Gustavo, un <span classNameName="destacado"> apasionado del arte </span> en sus distintas
                        expresiones. La música
                        siempre ha sido parte fundamental durante mi juventud, pero desde niño el <span
                            className="destacado"> dibujo
                            y las artes plásticas</span> fueron un vínculo cercano.
                    </h3>
                    <h4>
                        El tiempo hizo que ese nexo sea
                        recuperado y fortalecido años más adelante.
                    </h4>
                </article>
                </div>
                <img className="deco" src={Image2} alt=""/>
            </div>
        </div>
        
        <div className="row">
            <div className="col col-md-7 offset-4 mb-5">
                <article id="copy" className="secondCopy">
                    <h3>
                        Luego de muchos años, los infinitos caminos de la vida me impulsaron, decididamente,
                        a salir en busca de un <span className="destacado"> bastidor y pinceles</span>. Desde ese momento, mi mente esta completamente
                        enfocada en la imaginación de <span className="destacado"> texturas y colores </span>.
                        A través de la pintura busco explorar detalladas y delicadas
                        líneas que me llevan a describir la armonía que puedo ver en la naturaleza y el universo.
                    </h3>
                    <h4>
                        En la actualidad, mi obra esta orientada a la <span className="destacado">pintura abstracta</span>. Los días me encuentran
                        enfrentándome a nuevos desafíos en este maravilloso mundo de la pintura.
                    </h4>
                    
                    
                    <img id="au-secondCopy" src={Image4} alt=""/>
                    <img id="au-secondCopy2" src={Image5} alt=""/>
                    
                
                </article>
            </div>
        </div>
    </section>
    )
}

export default Main