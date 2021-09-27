import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({id,bookname,author,price,quantity,date,handleRemoveBook}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>Autor: {author}</div>
          <div>Cantidad: {quantity} </div>
          <div>Precio: {price} </div>
          <div>Fecha: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Editar
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
