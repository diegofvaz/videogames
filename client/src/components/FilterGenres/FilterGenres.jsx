import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterGenres } from '../../redux/actions'
import { getAllGenres } from '../../redux/actions'
import { useEffect } from 'react'


const FilterGenres = ({setCurrentPage}) => {

    const dispatch = useDispatch()
    const allGenres = useSelector((state) => state.genres)

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch])

    function handleFilterGender(e){
        // if (e.target.value === 'all') {
        //     dispatch(getAllVideogames())
        // } else {
            e.preventDefault()
            dispatch(filterGenres(e.target.value))      
            setCurrentPage(1);
            // setOrder(`ordenado${e.target.value}`)
            e.target.value = 'default'
        //}
    }

    return (
        <div>Genres
            <select name='select' onChange={(e)=>handleFilterGender(e)} defaultValue="default">
                <option value='default' disabled='disabled'>Select</option>
                <option value='all'>All Genres</option>
                {
                    allGenres.map((e)=>(
                        <option key={e.name} value={e.name}>
                            {e.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default FilterGenres