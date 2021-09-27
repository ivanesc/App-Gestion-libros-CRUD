import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  //La función que se le pasa al useState es para lazy initialization y solo se ejecuta 1 vez nada más entrar por primera
  //vez a la app de manera que el navegador recuerde los libros que ya teníamos. Luego la lista de libros la recuperamos del estado global del Context
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key)
      return localValue ? JSON.parse(localValue) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  useEffect(() => {
    //Aquí guardamos en caché interna del navegador el array que llega con el estado value con todos los libros
    //Esto se ejecutará cada vez que cambie la key (en este caso siempre tendrá la inicial) y cuando el estado global cambie al renderizar de nuevo todo
    //Por ejemplo al añadir un libro o eliminarlo eso hará que se vuelva a renderizar el componente AppRouter
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
};

export default useLocalStorage
