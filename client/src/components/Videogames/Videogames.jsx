import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../redux/actions";
import Videogame from "../Videogame/Videogame";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import style from '../Videogames/Videogames.module.css'

const Videogames = ({currentGames}) => {
   
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllVideogames())
    }, [dispatch]);

    return (
        <div className={style.conteiner}>
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
        </div>
    )
}

export default Videogames