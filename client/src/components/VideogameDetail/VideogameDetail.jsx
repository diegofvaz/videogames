import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail, clearDetail } from '../../redux/actions'
import Loading from "../Loading/Loading";
import Error from '../Error/Error';
import style from '../VideogameDetail/VideogameDetail.module.css'

const VideogameDetail = () => {

    const details = useSelector((state)=>state.videogame)
    const { id } = useParams()

    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getDetail(id))
        window.scrollTo(0, 0);
        return()=>{
          dispatch(clearDetail())
        }
    }, [id, dispatch] )

    if(details.name === 404){
        return (
          <Error/>
        )
    }

    return (    
        <div className={style.content}>
            {details.name ?
                <div className={style.card}> 
                    <div>
                        <img src={details.image} alt="" width="400px" height="250px"/>
                    </div>    
                    <p className={style.name}>{details.name}</p>
                    <p className={style.description}>{details.description}</p>
                    <p className={style.rating}> Rating: {details.rating}</p>
                    <p className={style.released}> Released: {details.released}</p>
                    <p className={style.genres}>Genres: {details.genres?.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}</p>
                    <p className={style.platforms}>Platforms: {details.platforms?.map(e => e).join(', ')}</p>
                    <Link to={'/home'}>
                        <button className={style.button} type="submit">Back Home</button>
                    </Link>
                </div> 
                :
                <div className={style.loading}>
                    <Loading/>
                </div>
            }
        </div>
    )
}

export default VideogameDetail