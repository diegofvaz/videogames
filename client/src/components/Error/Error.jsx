import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Error/Error.module.css'


const Error = () => {
    
    return (
        <div className={style.content}>
            <h1>Page not found</h1>
            <div>
                <Link to='/home'><button className={style.button}>Back Home</button></Link>
            </div>
        </div>
    )
}

export default Error