import React from 'react'
import { Link } from 'react-router-dom'
import style from '../LandingPage/LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={style.content}> 
            <div>
                <Link to='/home'><button className={style.button}>GET STARTED</button></Link>
            </div>
        </div>
    )
}

export default LandingPage