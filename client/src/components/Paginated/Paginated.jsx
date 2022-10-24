import React from "react";
import style from '../Paginated/Paginated.module.css'


const Paginated = ({gamesPerPage, allVideogames, paginado}) => {

    const pageNumber = []

    for(let i = 1; i <= Math.ceil(allVideogames/gamesPerPage); i++) { 
        pageNumber.push(i)
    }

    return (
        <div className={style.content}>
            {pageNumber && pageNumber.map(number => (
                <span key={number}>
                    <button className={style.button} onClick={() => paginado(number)}>{number}</button>
                </span>
            ))}
        </div>
     
    )
}

export default Paginated