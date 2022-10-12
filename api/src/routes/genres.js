const { Router } = require('express');
const router = Router();

const { getAllGenres } = require('../controllers/genre')
const { Genre } = require('../db.js')


router.get('/', async (req, res, next) => {
    
    try { 
        await getAllGenres()
        const genres = await Genre.findAll()
		res.send(genres)
    } catch(error) {
        next(error)
    }
})


module.exports = router;