import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
    
    return (
        <div>
            <h1>Page not found</h1>
            <div>
                <Link to='/home'><button>Back Home</button></Link>
            </div>
        </div>
    )
}

export default Error