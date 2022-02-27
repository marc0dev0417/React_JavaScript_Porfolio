import React from 'react';
import './Slider.css'

/*
- Contendra una url de la imagen y el titulo de la imagen
- Recorrer mi array de objetos con map
*/

const infoDiapositiva = [
    {
        src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt: "Proyecto 1",
        desc: "Proyecto 1" 
    },
    {
        src: "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
        alt: "Proyecto 2",
        desc: "Proyecto 2"
    },
    {
        src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt: "Proyecto 3",
        desc: "Proyecto 3"
    }
]
//Lo recorro
const diapositivas = infoDiapositiva.map((diaposi =>
    <div className="contenedor-slide">
        <img src={diaposi.src} alt={diaposi.alt}></img>
            <div className="slide-desc">
                <span>{diaposi.desc}</span>
            </div>
    </div>
))

export default diapositivas;