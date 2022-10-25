import React from 'react'
import { useDispatch } from 'react-redux'
import { filterVideogame } from '../../redux/actions'
import style from '../FilterVideogame/FilterVideogame.module.css'


const FilterVideogame = ({setCurrentPage}) => {

    const dispatch = useDispatch()

    function handleFilterVideogame(e){
        e.preventDefault()
        dispatch(filterVideogame(e.target.value))      
        setCurrentPage(1);
        // setOrder(`ordenado${e.target.value}`)
        e.target.value = 'default'
    }

    return (
        <div className={style.content}>
            <select className={style.select} name='select' onChange={(e)=>handleFilterVideogame(e)} defaultValue="default">
                <option value='default' disabled='disabled'>Videogames</option>
                <option value='all'>All Videogames</option>
                <option value='api'>Previous</option>  
                <option value='db'>Created</option>   
            </select>
        </div>
    )
}

export default FilterVideogame