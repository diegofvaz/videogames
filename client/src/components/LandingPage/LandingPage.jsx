import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div> 
            <div>
                <h1>VIDEOGAMES APP</h1>
                <Link to='/home'><button>GET STARTED</button></Link>
            </div>
        </div>
    )
}

export default LandingPage