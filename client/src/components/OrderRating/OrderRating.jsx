import React from 'react'
import { useDispatch } from 'react-redux'
import { orderRating } from '../../redux/actions'
import { getAllVideogames } from '../../redux/actions'


const OrderRating = () => {

    const dispatch = useDispatch()

    function handleOrderRating(e){
        // if (e.target.value === 'all') {
        //     dispatch(getAllVideogames())
        // } else {
            e.preventDefault()
            dispatch(orderRating(e.target.value))      
            // setPaginaActual(1);
            // setOrder(`ordenado${e.target.value}`)
            //e.target.value = 'default' -----> vuelve a default después de ejecutar un orden
        //}
    }

    return (
        <div>Rating
            <select name='select' onChange={e=>{handleOrderRating(e)}} defaultValue="default">
                <option value='default' disabled='disabled'>Select</option>
                <option value='all'>All Games</option>
                <option value='rMin'>Rating min</option>  
                <option value='rMax'>Rating max</option>                     
            </select>
        </div>
    )
}

export default OrderRating