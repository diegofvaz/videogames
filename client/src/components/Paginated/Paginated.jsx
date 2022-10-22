import React from "react";

const Paginated = ({gamesPerPage, allVideogames, paginado}) => {

    const pageNumber = []

    for(let i = 1; i <= Math.ceil(allVideogames/gamesPerPage); i++) { 
        pageNumber.push(i)
    }

    return (
        <div>
            {pageNumber && pageNumber.map(number => (
                <span key={number}>
                    <button onClick={() => paginado(number)}>{number}</button>
                </span>
            ))}
        </div>
     
    )
}

export default Paginated