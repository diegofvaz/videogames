import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../redux/actions";
import Videogame from "../Videogame/Videogame";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Paginated from "../Paginated/Paginated";

const Videogames = () => {
   
    const allVideogames = useSelector((state)=>state.videogames)

    const [currentPage, setCurrentPage] = useState(1) 
    const gamesPerPage = 15
    const indexOfLastGame = currentPage * gamesPerPage
    const indexOfFirstGame= indexOfLastGame - gamesPerPage 
    const currentGames = allVideogames.slice(indexOfFirstGame, indexOfLastGame)

    const dispatch = useDispatch()

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    useEffect(() => {
        dispatch(getAllVideogames())
    }, []);

    console.log(allVideogames)

    
    return (
        <div>
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