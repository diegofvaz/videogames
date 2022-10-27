import React from 'react'
import { useDispatch } from 'react-redux'
import { orderRating } from '../../redux/actions'
import style from '../OrderRating/OrderRating.module.css'


const OrderRating = ({setCurrentPage}) => {

    const dispatch = useDispatch()

    function handleOrderRating(e){
        e.preventDefault()
        dispatch(orderRating(e.target.value))      
        setCurrentPage(1);
        e.target.value = 'default'
    }

    return (
        <div>
            <select className={style.select} name='select' onChange={e=>{handleOrderRating(e)}} defaultValue="default">
                <option value='default' disabled='disabled'>Rating</option>
                <option value='all'>All Games</option>
                <option value='rMin'>Rating min</option>  
                <option value='rMax'>Rating max</option>                     
            </select>
        </div>
    )
}

export default OrderRating