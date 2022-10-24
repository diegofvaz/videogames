import React from 'react'
import NavBar from "../NavBar/NavBar";
import OrderName from "../OrderName/OrderName";
import OrderRating from "../OrderRating/OrderRating";
import FilterGenres from "../FilterGenres/FilterGenres";
import FilterVideogame from "../FilterVideogame/FilterVideogame";
import Videogames from '../Videogames/Videogames';
import Paginated from '../Paginated/Paginated';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';

const Home = () => {

    const allVideogames = useSelector((state)=>state.videogames)

    const [currentPage, setCurrentPage] = useState(1) 
    const gamesPerPage = 15
    const indexOfLastGame = currentPage * gamesPerPage
    const indexOfFirstGame= indexOfLastGame - gamesPerPage 
    const currentGames = allVideogames.slice(indexOfFirstGame, indexOfLastGame)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage])
    

    //console.log(allVideogames)
    
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <OrderName setCurrentPage={setCurrentPage}/>
            </div>
            <div>
                <OrderRating setCurrentPage={setCurrentPage}/>
            </div>
            <div>
                <FilterGenres setCurrentPage={setCurrentPage}/>
            </div>
            <div>
                <FilterVideogame setCurrentPage={setCurrentPage}/>
            </div>
            <div>
                <Videogames currentGames={currentGames}/>
            </div>
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

export default Home