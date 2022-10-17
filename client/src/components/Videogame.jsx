import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { getAllVideogames } from "../redux/actions";

export const Videogame = ({id, name, image, genres}) => {
   
    // const dispatch = useDispatch()
    // const allVideogames = useSelector((state)=>state.videogames)
    
    // useEffect(() => {
    //     dispatch(getAllVideogames())
    // }, []);

    // console.log(allVideogames)

    return (
        <div key={id}>
            <h4>{name}</h4>
            <h6>{id}</h6>
            <h6>{genres}</h6>
            <img src={image} width="400px" height="250px"/>
        </div>
    )
}