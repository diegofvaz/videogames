import React from 'react'
import { useDispatch } from 'react-redux'
import { orderName } from '../../redux/actions'


const OrderName = () => {

    const dispatch = useDispatch()

    function handleOrderName(e){
        e.preventDefault()
        dispatch(orderName(e.target.value))      
        // setPaginaActual(1);
        // setOrder(`ordenado${e.target.value}`)
        //e.target.value = 'default' -----> vuelve a default después de ejecutar un orden
      }

    return (
        <div>Ordenar 
            <select name='select' onChange={e=>{handleOrderName(e)}} defaultValue="default">
                <option value='default' disabled='disabled'>Asc/Desc</option>
                <option value='all'>Todos</option>
                <option value='asc'>A - Z</option>  
                <option value='desc'>Z - A</option>                     
            </select>
        </div>
    )
}

export default OrderName