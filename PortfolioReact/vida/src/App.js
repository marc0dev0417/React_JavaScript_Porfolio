import React, {useState, useEffect} from 'react';
import './App.css';
import Portada from './componentes/portada/Portada.js';
import MenuNav from './componentes/menuNav/MenuNav';
import SobreMi from './componentes/sobreMi/SobreMi';
import Slider from './componentes/slider/Slider';
import Info from './componentes/info/Info';
import Footer from './componentes/footer/Footer.js';

function App() {

  /*
  Ahora tengo que controlar mi scroll - una pieza de estado para guardar la position de mi scroll
  */

  const [alturaScroll, modificarAlturaScroll] = useState(0); // Por defecto estará en 0 cuando se recargue la pagina

  //Crear una función que controlará la posicion de mi scroll

  const manejadorDesplazamiento = () =>{
      const posicion = window.pageYOffset; //window.pageYoffset o window.scrollY Retorna el numero de pixeles que han sido desplazados en el documento mediante el scroll vertical

      //asignar el valor a mi estado
      modificarAlturaScroll(posicion);
  };

  //Cada vez que haga scroll se actualice
  useEffect(() =>{
    window.addEventListener("scroll", manejadorDesplazamiento);
  }, [alturaScroll]) //Como parametro el scroll de este modo cada vez que este parametro cambie se ejecutara mi useEffect y se actualizara el valor de nuestro estado con la posicion de mi scroll

 //Hago un props para acceder a la propiedad de la altura del scroll y a la posicion de mi scroll. Por ultimo podré modificar los estilos de mi menu de navegacion a traves de la posicion
  return <div className="App">
    <MenuNav estaDesplazando={alturaScroll}></MenuNav>
    <Portada></Portada>
    <SobreMi></SobreMi>
    <Slider></Slider>
    <Info></Info>
    <Footer></Footer>
  </div>  
}
export default App;
