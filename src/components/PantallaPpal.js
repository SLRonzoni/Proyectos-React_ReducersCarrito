import React from 'react'
//ESTILOS
import '../App.css';
//BOOSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
//COMPONENTES
import Carrito from './Carrito';


const PantallaPpal = () => {

    
    return (
      <div >
        <div className="header">
            <h1  className="header"><strong>Corralón de Materiales "Rasti"</strong></h1>
            <br></br>
            <h3  className="header"><strong>Nuestros productos</strong></h3>
        </div>    

        <div>
            <Carrito></Carrito>
        </div>

      </div>
    );
};

export default PantallaPpal;

