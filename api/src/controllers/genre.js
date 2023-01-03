const axios = require('axios')
require('dotenv').config()
const { API_KEY } = process.env;
const { Genre } = require('../db.js')

const getAllGenres = async () => {

    let url = `https://api.rawg.io/api/genres?key=${API_KEY}`
    
    try {
        const genres = await axios.get(url)
        const genre = genres.data.results.map(e=> ({id: e.id, name: e.name}))
        const allGenre = await Genre.bulkCreate(genre) 
        return allGenre
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllGenres
}