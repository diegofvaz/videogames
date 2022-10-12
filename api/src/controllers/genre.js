const axios = require('axios')
const { API_KEY } = process.env;
const { Genre } = require('../db.js')

const getAllGenres = async () => {
    let url = `https://api.rawg.io/api/genres?key=4ad4ff1f90d14b2ab86fe2c9635fd7f8`
    // const res = await axios.get(url)
    // return res.data.results
    try {
        let genres = await axios.get(url)
        let genre = genres.data.results.map(e=> ({id: e.id, name: e.name}))
        let allGenre = await Genre.bulkCreate(genre)   //---> bulkCreate crea desde un array
        return allGenre
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllGenres
}