import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getName } from "../../redux/actions";
import style from '../SearchBar/SearchBar.module.css'


const SearchBar = () => {

    const [name, setName] = useState('')
    const dispatch = useDispatch()

    function handleChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(name.length) {
            dispatch(getName(name))
            setName('')
        } else {
            alert('You must type to search')
        }
    }
    
    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <input 
                        className={style.inputsearch}
                        type='text'
                        id="name"
                        autoComplete="off"
                        value={name}
                        placeholder='Videogame...'
                        onChange={e => handleChange(e)}
                    />
                    <button className={style.button1} type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar