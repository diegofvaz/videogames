const { Router } = require('express');
const router = Router();

const { getApiVideogames } = require('../controllers/videogame')
const { Videogame } = require('../db')

router.get('/', async (req, res, next) => {

    const allVideogames = await getApiVideogames()
    try { 
        res.send(allVideogames)
    } catch(error) {
        next(error)
    }

    // Pruebo traerme los videogames de la DB ----> FUNCIONA!!!
    // const allVideogamesDB = await Videogame.findAll()
    // res.send(allVideogamesDB)
})


module.exports = router;