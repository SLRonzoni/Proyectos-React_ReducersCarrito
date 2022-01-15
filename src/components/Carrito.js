import React from 'react';
//ESTILOS
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//ICONOS
import 'antd/dist/antd.css';
import {ShoppingCartOutlined} from '@ant-design/icons';
//REDUCERS
import { useReducer } from 'react';
import {TYPES} from '../store/action';
import { initialState, productosReducer } from '../store/reducer';
//COMPONENTES
import CarroItem from './CarroItem';
import ProductoItem from './ProductoItem';


const Carrito = () => {

    const [state,dispatch]=useReducer(productosReducer,initialState);
    const {elementos,carro,totalCarro}=state;
   
    const agregar_carro = (id)=>dispatch({type:TYPES.AGREGAR_CARRO,payload:id});
    const quitar_carro = (id)=>dispatch({type:TYPES.QUITAR_CARRO,payload:id});
    const limpiar_carro=()=>dispatch({type:TYPES.LIMPIAR_CARRO});
    const pagar_carro=()=>dispatch({type:TYPES.PAGAR_CARRO});

    return (
     
      <div className='container'>
        <div className='producto'>
          {elementos.map((unElemento) => (
                <ProductoItem 
                       key={unElemento.id}
                       id={unElemento.id}
                       nombre={unElemento.nombre}
                       descripcion={unElemento.descripcion}
                       precio={unElemento.precio}
                       subtotal={unElemento.cantComprada*unElemento.precio}
                       image={unElemento.image}
                       agregar_carro={agregar_carro} 
                />
            ))} 
        </div>
        
        <div className='box-carrito' >
          <h4 className='titulo-carrito'><strong>Productos en carrito</strong></h4>
          <table >
            <thead className='thead-carrito'>               
                <tr>
                    <td className='izquierda'><strong>Producto</strong></td>
                    <td className='derecha' ><strong>Cantidad</strong></td>
                    <td className='derecha' ><strong>Precio</strong></td>
                    <td className='derecha' ><strong>Subtotal</strong></td>
                    <td className='derecha' ><strong>Quitar</strong></td>
                </tr>
            </thead>    
          </table>    

          {carro.map((item,index)=> (
              <CarroItem 
                    key={index} 
                    data={item}
                    quitar_carro={quitar_carro}
                />))}
            <br></br>
            <p className='titulo-carrito' ><strong>Total de la compra  :  $  {totalCarro}</strong></p>
            <br></br>
            <button className='botonPagar' onClick={pagar_carro}>Pagar<ShoppingCartOutlined style={{fontSize:'25px', color:'green'}}/></button>
            <button className='botonQuitarLimpiar' onClick={limpiar_carro}>Vaciar<ShoppingCartOutlined style={{fontSize:'25px', color:'red'}}/></button>
          </div>
      </div>
    )};

    export default Carrito;