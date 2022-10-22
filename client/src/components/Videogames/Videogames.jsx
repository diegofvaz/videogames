import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../redux/actions";
import Videogame from "../Videogame/Videogame";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import OrderName from "../OrderName/OrderName";
import OrderRating from "../OrderRating/OrderRating";
import FilterGenres from "../FilterGenres/FilterGenres";
import FilterVideogame from "../FilterVideogame/FilterVideogame";
import Loading from "../Loading/Loading";
import Paginated from "../Paginated/Paginated";

const Videogames = () => {
   
    const allVideogames = useSelector((state)=>state.videogames)

    const [currentPage, setCurrentPage] = useState(1) //lo seteo en 1 porque siempre arranco por la primer pagina
    const gamesPerPage = 15//cantidad de juegos que debe haber por pagina
    const indexOfLastGame = currentPage * gamesPerPage // 1 * 15 = 15
    const indexOfFirstGame= indexOfLastGame - gamesPerPage // 15 - 15 = 0
    const currentGames = allVideogames.slice(indexOfFirstGame, indexOfLastGame) //para dividir la cantidad de juegos por pagina

    const dispatch = useDispatch()

    const paginado = (pageNumber) => { //establece el numero de pagina
        setCurrentPage(pageNumber)
    }
    
    useEffect(() => {
        dispatch(getAllVideogames())
    }, []);

    console.log(allVideogames)

    
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <OrderName/>
            </div>
            <div>
                <OrderRating/>
            </div>
            <div>
                <FilterGenres/>
            </div>
            <div>
                <FilterVideogame/>
            </div>
            {currentGames.length > 0 ?
                currentGames?.map(v => {
                    return (
                        <div>
                            <Link to={`/videogames/${v.id}`}>
                                <Videogame 
                                    key={v.id}
                                    id={v.id}
                                    name={v.name}
                                    image={v.image}
                                    genres={v.genres?.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}
                                />
                            </Link>
                        </div>
                    ) 
                }) 
                : 
                <div>
                    <Loading/>
                </div> 
            } 
            <div>
                <Paginated 
                    gamesPerPage={gamesPerPage} 
                    allVideogames={allVideogames.length} 
                    paginado={paginado} 
                />
            </div>
        </div>
    )
}

export default Videogames