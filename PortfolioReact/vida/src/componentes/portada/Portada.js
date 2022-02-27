import React from 'react'
import './Portada.css';
import videoPortada from '../../media/videoPortada.mp4';


var nombre = "Marco Alonso Benegas";
const Portada = () => {
    return (
        <div className="contenedor-portada">
            <video className="videoPortada" loop autoplay muted src={videoPortada}></video>
                <h1>{nombre}</h1>
                <p>Developer | backend</p>
        </div>
    )
}
export default Portada
