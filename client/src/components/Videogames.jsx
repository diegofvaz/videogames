import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { getAllVideogames } from "../redux/actions";
import { Videogame } from "./Videogame";

export const Videogames = () => {
   
    const dispatch = useDispatch()
    const allVideogames = useSelector((state)=>state.videogames)
    
    useEffect(() => {
        dispatch(getAllVideogames())
    }, []);

    console.log(allVideogames)

    
    return (
        <div>
            <h1>Videogames</h1>
            {allVideogames.map(v => {
                return (
                    <div>
                        <Videogame 
                            key={v.id}
                            id={v.id}
                            name={v.name}
                            image={v.image}
                            genres={v.genres.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}
                        />
                    </div>
                ) 
            })}   
        </div>
    )
}
