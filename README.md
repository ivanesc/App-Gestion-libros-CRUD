# App-Gestion-libros-CRUD

## Funciones generales 

Con esta app se pueden gestionar los siguientes aspectos relativos a operaciones CRUD con una biblioteca de libros:

+ Consultar lista de libros añadidos a la caché del navegador a través de LocalStorage

+ Añadir nuevo libro con un conjunto de detalles básicos

+ Editar un libro ya añadido y disponible en la lista

+ Eliminar un libro ya añadido y disponible en la lista

## Soluciones aplicadas

Para implementar esta app se ha hecho uso de lo siguiente:

+ React Router para habilitar navegación entre componentes

+ React Context para gestionar estado global y pasar o actualizar datos del estado entre componentes con mayor flexibilidad

+ Custom hook para permitir almacenar los datos del estado correspondiente a la lista de libros en Local Storage

## Scripts para instalación y pruebas en local

En el directorio principal del proyecto se pueden ejecutar los siguientes scripts disponibles en el package.json para instalar las dependencias 
básicas y ejecutar la aplicación en tu navegador:

### `npm install`

### `npm run start`

Una vez ejecutados los scripts anteriores se podrá probar la app desde [http://localhost:3000](http://localhost:3000) en el navegador

> + **NOTA:**  Enlace para visualizar y probar la app en producción sin tener que hacerlo en local: [https://brave-bose-260296.netlify.app/](https://brave-bose-260296.netlify.app/)
