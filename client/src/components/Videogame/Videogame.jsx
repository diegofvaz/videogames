import React from "react";
import style from '../Videogame/Videogame.module.css'


const Videogame = ({id, name, image, genres}) => {

    return (
        <div className={style.card} key={id}>
            <img src={image} width="400px" height="250px"/>
            <h4 className={style.name}>{name}</h4>
            <h6 className={style.genres}>{genres}</h6>
        </div>
    )
}

export default Videogame