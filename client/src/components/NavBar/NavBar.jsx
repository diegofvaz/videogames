import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch } from 'react-redux';
import { getAllVideogames } from "../../redux/actions";


const NavBar = () => {

    const dispatch = useDispatch()

    const handleRefresh = (e) => {
        e.preventDefault()
        dispatch(getAllVideogames())
    }

    return (
        <div>
            <Link to={'/home'}>
                <button type="text" onClick={e => handleRefresh(e)}>Videogames App</button>
            </Link>
            <Link to={'/create'}>
                <button type="submit">Create Videogame</button>
            </Link>
            <SearchBar/>
        </div>
    );
};

export default NavBar;