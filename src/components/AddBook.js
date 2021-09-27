import React, { useContext } from 'react'
import BookForm from './BookForm'
import BooksContext from '../context/BooksContext'

//La propiedad history de este componente le llega del route de React Router por defecto. Al llamar por ejemplo con un
//render en appRouter a este componente se podría poner así: 
/*<Route
    render={(props) => (
      <AddBook {...props} />
    )} */
const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext)

  //Aquí se recibe el objeto libro con la información rellenada del formulario añadir libro y se encarga de actualizar el estado acumulando los libros que ya teníamos de antes
  const handleOnSubmit = (book) => {
    setBooks([book, ...books])
    history.push('/')
  }

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  )
}

export default AddBook
