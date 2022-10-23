import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
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
            <p>{details.genres?.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}</p>
            <p>{details.platforms?.map(e => e).join(', ')}</p>
            <Link to={'/home'}>
                <button type="submit">Back Home</button>
            </Link>
        </div>
    )
}

export default VideogameDetail