import React from 'react';
import './Slider.css';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Deslizador from './Diapositivas.js';

const Slider = () =>{//Voy a descargar un paquete externo de slide(Deslizadores) con el comando npm install @brainhubeu/react-carousel
    //slidesPerPage cuantas diapositivas quiero que se muestren en aumento
    //infinite que se cree un bucle a la ultima imagen y me muestre desde principio las diapositivas
    //animationSpeed la rapidez que se moveran las diapositivas
    //offset el margen o distancia por cada diapositiva

    //Ahora voy a crear mis diapositivas en un array de componentes JSX
    return(<div className="contenedor-deslizador">
            <div className="titulo-deslizador">
               <h2>Mis Proyectos</h2> 
            </div>
            
            <Carousel 
            arrows
            slidesPerPage ={3}
            infinite
            animationSpeed={200}
            centered
            offset={50}
            itemWidth={400}
            slides={Deslizador}
            breakpoints={{
                960:{
                    slidesPerPage:1,
                    arrows:false,
                    itemWidth: 250,
                }}}
            />
    </div>
    )
}

export default Slider;