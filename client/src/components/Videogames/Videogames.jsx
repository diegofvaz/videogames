import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { getAllVideogames } from "../../redux/actions";
import Videogame from "../Videogame/Videogame";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import OrderName from "../OrderName/OrderName";
import OrderRating from "../OrderRating/OrderRating";
import FilterGenres from "../FilterGenres/FilterGenres";
import FilterVideogame from "../FilterVideogame/FilterVideogame";
import Loading from "../Loading/Loading";

const Videogames = () => {
   
    const dispatch = useDispatch()
    const allVideogames = useSelector((state)=>state.videogames)
    
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
            {allVideogames.length > 0 ?
                allVideogames?.map(v => {
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
        </div>
    )
}

export default Videogames