const { Router } = require('express');
const router = Router();
const { getAllVideogames, getVideogameById } = require('../controllers/videogame')
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
})

router.get('/:id', async (req, res, next)=>{
    
    const { id } = req.params   

    try {
        const videogameById= await getVideogameById(id)
        return res.send(videogameById)    
   } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {

    const { name, description, released, rating, platforms, genres } = req.body
       
    try {
        let newVideogame = await Videogame.create ({ 
            name,
            description,
            released,
            rating,
            platforms
        })
        const generos = await Genre.findAll({ 
            where: { 
                name: genres
            }  
        })
        await newVideogame.addGenre(generos)
        res.status(200).send(newVideogame)
    } catch(error) {
        next(error)
    }
})

module.exports = router;