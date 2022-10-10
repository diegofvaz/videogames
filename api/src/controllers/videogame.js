const axios = required('axios')
const { API_KEY } = process.env;
const { Videogame } = required('../db.js')

const getApiVideogames = async () => {
    let url = `https://api.rawg.io/api/games?key=${API_KEY}`
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

const getDBVideogames = async () => {
    try {
        return await Videogame.findAll({
           include: [{
               model: Genres, 
               atributes: ['name'], 
               throught: { 
                   attributes: [] 
               }
           }]
       })
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
    getAllVideogames
}