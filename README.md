# Individual Project - Henry Videogames

<p align="left">
  <img height="200" src="./videogames.JPG" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver los distintos videojuegos disponibles junto con información relevante de los mismos utilizando la api externa [rawg](https://rawg.io/apidocs) y a partir de ella poder, entre otras cosas:

- Buscar videjuegos
- Filtrarlos / Ordenarlos
- Agregar nuevos videojuegos

## Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /videogames__:
  - Obtener un listado de los videojuegos
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /videogames?name="..."__:
  - Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
- [ ] __GET /videogame/{idVideogame}__:
  - Obtener el detalle de un videojuego en particular

