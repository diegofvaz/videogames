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
        

    // // Pruebo traerme los videogames de la DB ----> FUNCIONA!!!
    // const allVideogamesDB = await Videogame.findAll()
    // res.send(allVideogamesDB)
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

    console.log(genres)
       //la accion de crear una nueva instancia es asincrona, como manejo errores? con try y catch
    try {
        let newVideogame = await Videogame.create ({ //le paso al create el objeto con todos los atributos que quiero que tenga mi nuevo videojuego
            name,
            description,
            released,
            rating,
            platforms
            //genres
        })
        // genres.forEach(async (e) => {
        //     let genresDb = await Genre.findAll({
        //       where: { name: e.name },
        //     });
        //     newVideogame.addGenre(Object.values(genresDb));
        //   });

        //   genres.forEach(async (g) => {
        //     let genresGame = await Genre.findAll({ where: { name: g } });
        //     await newVideogame.addGenre(genresGame);
        //   });
        let relation = await Genre.findAll({
            where: { name: genres }
        })
        // let relation = console.log(await Genre.findAll({ //en generos, buscame todos aquellos
            
        //     where: { //donde
        //         name: genres
        //     }
        // })
        // )
        console.log("soy la relacion", relation)
        await newVideogame.addGenre(relation) //a mi juego creado, le agrego algun genero
        console.log(newVideogame)
        res.send(newVideogame)

    } catch(error) {
        next(error)
    }
})

// router.post('/', async (req, res) => {
//     let {
//       name,
//       released,
//       rating,
//       //image,
//       genres,
//       platforms,
//       description,
//       //createdInDb
//     } = req.body
  
//     let gameCreated = await Videogame.create({
//       name,
//       released,
//       rating,
//       //image,
//       platforms,
//       description,
//       //createdInDb
//     })
  
//     let genreDb = await Genre.findAll({
//       where: { name: genres }
//     })
//     gameCreated.addGenre(genreDb)
//     console.log(gameCreated)
//     res.send(gameCreated)
//   })
  
  

module.exports = router;