import React from 'react'
import './MenuNav.css';

const MenuNav = ({estaDesplazando}) => {//Me traigo el props(la propiedad) de la App-Scroll y ahora pues ya tendre acceso a la posicion del scroll de mi aplicacion web en el componente MenuNav
    //Si mi scroll baja un poco ya esta mayor que 20 le añado esta clase y si no es asi me devuelve null (vuelve a los estilos anteriores)
     
    //Una funcion que tendra un click que me llevara arriba de la pagina
        const arribaWeb = () =>{
            window.scrollTo({
                top: 100,
                left: 100
            }) // Que se ejecute cuando haga click en el logo
        }
    
    return (
        <div>
            <nav className={`menuNav ${estaDesplazando > 20 ? "deslizando" : null}`}> 
               <div className="menuNav-logo" onClick={arribaWeb}>Marco Alonso</div> 
            </nav>
        </div>
    )
}

export default MenuNav
