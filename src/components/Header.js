import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Administración y gestión de libros</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Consultar biblioteca de libros
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Añadir libro
        </NavLink>
      </div>
    </header>
  )
}

export default Header
