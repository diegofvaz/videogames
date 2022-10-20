import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getDetail } from '../../redux/actions'

const VideogameDetail = () => {

    const details = useSelector((state)=>state.videogame)
    const { id } = useParams()

    const dispatch= useDispatch()
    const [/*cambio */, setCambio] = useState(false)

    console.log("este es el detalle", details)

    useEffect(()=>{
        dispatch(getDetail(id))
        setCambio(true)
        // return()=>{
        //   dispatch(clearDetalle())
        // }
    }, [id, dispatch] )

    if(details.name === 404){
        return "esta cargando"
    }

    return (    
        <div>      
            <img src={details.image} alt="" width="400px" height="250px"/>
            <p>{details.name}</p>
            <p>{details.rating}</p>
            <p>{details.released}</p>
            <p>{details.description}</p>
            <p>{details.genres?.map(e => e).join(', ')}</p>
            <p>{details.platform?.map(e => e).join(', ')}</p>
            <NavLink to={'/home'}>
                <span>Back Home</span>
            </NavLink>
        </div>
    )
}

export default VideogameDetail