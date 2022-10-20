import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { getAllVideogames } from "../../redux/actions";
import Videogame from "../Videogame/Videogame";
import { Link } from "react-router-dom";

const Videogames = () => {
   
    const dispatch = useDispatch()
    const allVideogames = useSelector((state)=>state.videogames)
    
    useEffect(() => {
        dispatch(getAllVideogames())
    }, []);

    console.log(allVideogames)

    
    return (
        <div>
            {allVideogames.map(v => {
                return (
                    <div>
                        <Link to={`/videogames/${v.id}`}>
                            <Videogame 
                                key={v.id}
                                id={v.id}
                                name={v.name}
                                image={v.image}
                                genres={v.genres.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}
                            />
                        </Link>
                    </div>
                ) 
            })}   
        </div>
    )
}

export default Videogames