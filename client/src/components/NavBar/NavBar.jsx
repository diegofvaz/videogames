import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch } from 'react-redux';
import { getAllVideogames } from "../../redux/actions";
import style from '../NavBar/NavBar.module.css'


const NavBar = () => {

    const dispatch = useDispatch()

    const handleRefresh = (e) => {
        e.preventDefault()
        dispatch(getAllVideogames())
    }

    return (
        <div className={style.nav}>
            <Link to={'/home'}>
                <button type="text" className={style.button} onClick={e => handleRefresh(e)}>Videogames App</button>
            </Link>
            <Link to={'/create'}>
                <button type="submit" className={style.button} >Create Videogame</button>
            </Link>
            <SearchBar/>
        </div>
    );
};

export default NavBar;