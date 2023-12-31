import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className='cardProducto card'>
      <img className='imgProducto' src={img} alt={nombre} />
      <h3> {nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>ID: {id}</p>
      <p>Stock: {stock}</p>
      <Button className='button' as={Link} to={`/item/${id}`} variant="secondary">
        Ver Detalles
      </Button>
    </div>
  );
};

export default Item;