import React from 'react'
import NavBar from "../NavBar/NavBar";
import OrderName from "../OrderName/OrderName";
import OrderRating from "../OrderRating/OrderRating";
import FilterGenres from "../FilterGenres/FilterGenres";
import FilterVideogame from "../FilterVideogame/FilterVideogame";
import Videogames from '../Videogames/Videogames';


const Home = () => {

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
            <div>
                <Videogames/>
            </div>
        </div>
    )
}

export default Home