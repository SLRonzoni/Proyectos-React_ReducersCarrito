import React from 'react';
//ESTILOS
import '../App.css';
//BOOSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
//ICONOS
import 'antd/dist/antd.css';
import {DeleteOutlined} from '@ant-design/icons';


const CarroItem = ({data,quitar_carro}) => {
    let {id,nombre,precio,cantComprada,subtotal}=data;

    subtotal=cantComprada*precio;
    
    
    return (
        <div className='carrito listar-carrito'>
          <table>
            <tbody>
              <tr>
                  <td className='izquierda mayuscula'>{nombre}</td>
                  <td className='derecha'>{cantComprada}</td>
                  <td className='derecha'>$ {precio}</td>
                  <td className='derecha'>$ {subtotal}</td>
                  <td >
                    <button className='botonQuitarLimpiar' onClick={()=>quitar_carro(id)}><DeleteOutlined style={{fontSize:'15px', color:'red'}}/> </button>
                  </td>
             </tr>
            </tbody>
          </table>
         </div> 
    )
};

export default CarroItem;

