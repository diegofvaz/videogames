const { Router } = require('express');
const router = Router();

const { getApiVideogames, getDBVideogames, getAllVideogames, videogameByName } = require('../controllers/videogame')
const { Videogame, Genre } = require('../db')

router.get('/', async (req, res, next) => {

    const { name } = req.query

    try {
        const games= await getAllVideogames()

        if(name){
            const gameByName= games.filter(e=>e.name.toLowerCase().includes(name.toLowerCase())).slice(0,15)
            if(gameByName.length) res.send(gameByName)
            else res.status(404).send('Videogame not found')
        } else {
            res.send(games)
        }
    } catch (error) {
        next(error)
    }
        

    // // Pruebo traerme los videogames de la DB ----> FUNCIONA!!!
    // const allVideogamesDB = await Videogame.findAll()
    // res.send(allVideogamesDB)
})

router.post('/', async (req, res, next) => {

    const { name, description, released, rating, platforms, genres } = req.body

    console.log(req.body)
       //la accion de crear una nueva instancia es asincrona, como manejo errores? con try y catch
    try {
        let newVideogame = await Videogame.create ({ //le paso al create el objeto con todos los atributos que quiero que tenga mi nuevo videojuego
            name,
            description,
            released,
            rating,
            platforms,
            genres
        })
        // const relation = await Genre.findAll({ //en generos, buscame todos aquellos
        //     where: { //donde
        //         name: genres
        //     }
        // })
        // await newVideogame.addGenre(relation) //a mi juego creado, le agrego algun genero
        res.send(newVideogame)

    } catch(error) {
        next(error)
    }
})

module.exports = router;