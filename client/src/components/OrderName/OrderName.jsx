import React from 'react'
import { useDispatch } from 'react-redux'
import { orderName } from '../../redux/actions'
import style from '../OrderName/OrderName.module.css'


const OrderName = ({setCurrentPage}) => {

    const dispatch = useDispatch()

    function handleOrderName(e){
        e.preventDefault()
        dispatch(orderName(e.target.value))      
        setCurrentPage(1);
        e.target.value = 'default' 
    }

    return (
        <div className={style.content}>
            <select className={style.select} name='select' onChange={e=>{handleOrderName(e)}} defaultValue="default">
                <option value='default' disabled='disabled'>Order</option>
                <option value='all'>All Games</option>
                <option value='asc'>A - Z</option>  
                <option value='desc'>Z - A</option>                     
            </select>
        </div>
    )
}

export default OrderName