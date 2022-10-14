const axios = require('axios')
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js')

// Request for videogames from the api

const getApiVideogames = async () => {
    
    let url = `https://api.rawg.io/api/games?key=4ad4ff1f90d14b2ab86fe2c9635fd7f8`
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


// Request for videogames from the DB

// const allVideogamesDB = await Videogame.findAll()
//     res.send(allVideogamesDB)

const getDBVideogames = async () => {
    try {
        const allVideogamesDB = await Videogame.findAll({
            include: [{
                model: Genre, 
                atributes: ['name'], 
                throught: { 
                    attributes: [] 
                }
            }]
        })
        return allVideogamesDB 
    } catch(error) {
        console.error(error)
    }
}

// Videogames from Api and DB

const getAllVideogames = async () => {
    const apiVideogames = await getApiVideogames()
    const dbVideogames = await getDBVideogames()
    const allVideogames = apiVideogames.concat(dbVideogames)
    return allVideogames
}

// Request for videogame by id

const getVideogameById = async (id) =>{
    if(typeof id === 'string' && id.length > 8){
        const videogameByIdDB= await Videogame.findByPk(id, {
            include:{
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes:[]
                }
            }
        })
        return videogameByIdDB  
    }else{
        const videogameByIdApi= await axios.get(`https://api.rawg.io/api/games/${id}?key=4ad4ff1f90d14b2ab86fe2c9635fd7f8`)
        const e = videogameByIdApi.data
        const videogame= {
            id:e.id,
            name: e.name,
            //image: e.background_image,
            description: e.description_raw,
            released: e.released,
            rating: e.rating,
            platform: e.platforms.map(e=>e.platform.name),
            genres: e.genres.map(e=>e.name)
        }
        return videogame
    }
}




// Request for videogame by name

// const videogameByName = async (name) => {

//     let url = `https://api.rawg.io/api/games?search=${name}&key=4ad4ff1f90d14b2ab86fe2c9635fd7f8`

//     try {
//         const res = await axios.get(url)
//         res.data.results.map(e => {
//             return {
//                 id: e.id,
//                 name: e.name,
//                 released: e.released,
//                 rating: e.rating,
//                 platforms: e.platforms?.map(e => e.platform.name),
//                 genres: e.genres?.map(e => e.name)
//             }
//         })
//         return res
//     } catch (error) {
//         console.log(error)
//     }
// }


module.exports = {
    getApiVideogames,
    getDBVideogames,
    getAllVideogames,
    getVideogameById
    //videogameByName
}