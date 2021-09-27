import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

//Dentro del objeto que pasaremos como estado de book sólo cogerá el props.book cuando en el componente editBook le pasemos el objeto Book como propiedad
//de tal manera que dicho objeto ya tendrá toda la información para editar del libro cogida del estado global
//En caso de no tener el objeto book como propiedad estaríamos usando este mismo formulario para añadir un libro sin mostrar información inicial en los campos del formulario
const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      bookname: props.book ? props.book.bookname : '',
      author: props.book ? props.book.author : '',
      quantity: props.book ? props.book.quantity : '',
      price: props.book ? props.book.price : '',
      date: props.book ? props.book.date : ''
    }
  })

  const [errorMsg, setErrorMsg] = useState('');
  //Usamos desestructuración para pasar a cada campo del formulario la información por separado del estado local y luego al componente addBook
  const { bookname, author, price, quantity } = book

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const values = [bookname, author, price, quantity]
    let errorMsg = ''

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim()
      return value !== '' && value !== '0'
    })

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date()
      };
      //Aquí le pasamos el libro con su información a la función del componente padre AddBook pasada como prop para que se encargue de cambiar el estado
      props.handleOnSubmit(book)
    } else {
      errorMsg = 'Por favor rellena todos los campos'
    }
    setErrorMsg(errorMsg)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    switch (name) {
      case 'quantity':
        //Aquí se permite al usuario eliminar el contenido del campo para actualizar el estado
        if (value === '' || parseInt(value) === +value) {
          //Al modificar una parte del estado hay que mantener combinado el resto del estado que ya hemos podido cambiar antes
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }))
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }))
        }
        break
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }))
    }
  }

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Título</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Introduce el título del libro"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Introduce el nombre del autor"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Introduce la cantidad disponible"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Precio del libro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Introduce el precio del libro"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Guardar
        </Button>
      </Form>
    </div>
  )
}

export default BookForm
