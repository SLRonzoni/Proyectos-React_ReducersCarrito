import React from 'react';
//ESTILOS
import '../App.css';
//BOOSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
//ICONOS
import 'antd/dist/antd.css';
import {ShoppingCartOutlined} from '@ant-design/icons';



const ProductoItem = ({id,nombre,descripcion,precio,image,agregar_carro}) => {      

    return (        
        <Card style={{ height:'24rem', width:'17rem'}} className='box-card'>
          <img className='foto' src={image} alt='foto'/>
                <Card.Body>  
                    <Card.Title className='mayuscula'>{nombre}</Card.Title>
                    <Card.Text > Descripción :{descripcion}</Card.Text>
                    <Card.Text>Precio : $ {precio}  </Card.Text>               
                 </Card.Body>
                <button className='botonAgregar' onClick={()=>agregar_carro(id)}>
                <ShoppingCartOutlined style={{fontSize:'30px', color:'#FAEBD7'}}/>
                </button>
        </Card>       
    );
};

export default (ProductoItem);

