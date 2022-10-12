const { Router } = require('express');
const router = Router();

const { getApiVideogames, getDBVideogames, getAllVideogames } = require('../controllers/videogame')
const { Videogame, Genre } = require('../db')

router.get('/', async (req, res, next) => {

    const allVideogames = await getAllVideogames()
    try { 
        res.send(allVideogames)
    } catch(error) {
        next(error)
    }

    // // Pruebo traerme los videogames de la DB ----> FUNCIONA!!!
    // const allVideogamesDB = await Videogame.findAll()
    // res.send(allVideogamesDB)
})

router.post('/', async (req, res, next) => {

    const { name, description, released, rating, platforms, genre } = req.body
       //la accion de crear una nueva instancia es asincrona, como manejo errores? con try y catch
    try {
        let newVideogame = await Videogame.create ({ //le paso al create el objeto con todos los atributos que quiero que tenga mi nuevo videojuego
            name,
            description,
            released,
            rating,
            platforms,
            genre
        })
        // const relation = await Genre.findAll({ //en generos, buscame todos aquellos
        //     where: { //donde
        //         name: genre
        //     }
        // })
        // await newVideogame.addGenre(relation) //a mi juego creado, le agrego algun genero
        res.send(newVideogame)

    } catch(error) {
        next(error)
    }
})

module.exports = router;