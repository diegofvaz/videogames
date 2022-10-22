import React from 'react'
import { useDispatch } from 'react-redux'
import { filterVideogame } from '../../redux/actions'


const FilterVideogame = () => {

    const dispatch = useDispatch()

    function handleFilterVideogame(e){
        // if (e.target.value === 'all') {
        //     dispatch(getAllVideogames())
        // } else {
            e.preventDefault()
            dispatch(filterVideogame(e.target.value))      
            // setPaginaActual(1);
            // setOrder(`ordenado${e.target.value}`)
            //e.target.value = 'default' -----> vuelve a default después de ejecutar un orden
        //}
    }

    return (
        <div>Videogames
            <select name='select' onChange={(e)=>handleFilterVideogame(e)} defaultValue="default">
                <option value='default' disabled='disabled'>Select</option>
                <option value='all'>All Videogames</option>
                <option value='api'>Previous</option>  
                <option value='db'>Created</option>   
            </select>
        </div>
    )
}

export default FilterVideogame