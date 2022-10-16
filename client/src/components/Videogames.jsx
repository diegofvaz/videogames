import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { getAllVideogames } from "../redux/actions";

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
        </div>
    )
}
