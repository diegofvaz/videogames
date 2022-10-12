const axios = require('axios')
const { API_KEY } = process.env;
const { Videogame } = require('../db.js')

const getApiVideogames = async () => {
    //https://api.rawg.io/api/games
    let url = `https://api.rawg.io/api/games?key=4ad4ff1f90d14b2ab86fe2c9635fd7f8`
    //const res = await axios.get(url)
    //return res.data.results
    let videogames = []
    try {
        for(let i = 0; i < 5; i++){
            const res = await axios.get(url)
            res.data.results.map(v => {
                videogames.push({
                    id: v.id,
                    name: v.name,
                    image: v.background_image,
                    released: v.released,
                    rating: v.rating,
                    platforms: v.platforms?.map(e => e.platform.name),
                    genres: v.genres?.map(e => e.name)
                })
            })
            url = res.data.next
        }
        return videogames
    } catch (error) {
        console.log(error)
    }
}

// const allVideogamesDB = await Videogame.findAll()
//     res.send(allVideogamesDB)

const getDBVideogames = async () => {
    try {
        const allVideogamesDB = await Videogame.findAll()
        return allVideogamesDB 
    } catch(error) {
        console.error(error)
    }
}

const getAllVideogames = async () => {
    const apiVideogames = await getApiVideogames()
    const dbVideogames = await getDBVideogames()
    const allVideogames = apiVideogames.concat(dbVideogames)
    return allVideogames
}

module.exports = {
    getApiVideogames,
    getDBVideogames,
    getAllVideogames
}