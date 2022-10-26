import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createVideogame, getAllVideogames, getAllGenres } from '../../redux/actions'
import { Link } from 'react-router-dom';
import style from '../CreateVideogame/CreateVideogame.module.css'



function validate (input) {

    let errors = {}

    if(!input.name) {
        errors.name = 'El nombre es requerido'
    } else if(!/^[a-zA-Z0-9-() .]+$/.test(input.name)){
        errors.name = 'Solo se aceptan letras, numeros, guiones medios y parentesis'
    }

    if(input.image.length === 0 || !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.image)){
        errors.image='invalid URL'
    }

    if(!input.description) {
        errors.description = 'La descripcion es requerida'
    } else if (input.description.length > 100) {
        errors.description = 'La descripcion es muy larga. (Max = 100 caracteres)'
    }

    if(!input.released) {
        errors.released = 'La fecha de lanzamiento es requerida'
    }

    if(!input.rating) {
        errors.rating = 'El rating es requerido'
    } else if(input.rating > 5) {
        errors.rating = 'El rating no debe ser mayor a 5'
    } else if(input.rating < 1) {
        errors.rating = 'El rating mínimo debe ser 1'
    }

    if(!input.genres.length || input.genres.length > 4) {
        errors.genres = "Selecciona entre 1 y 4 generos" 
    }

    if(!input.platforms.length || input.platforms.length > 4){
        errors.platforms = "Solo se aceptan hasta 4 plataformas"
    } 
    return errors 
}


const CreateVideogame = () => {
    
    const [input, setInput] = useState({
        name: '',
        image: '',
        description: '',
        released: '',
        rating: '',
        genres: [],
        platforms: [],
    });

    const [errors, setErrors] = useState({});

    const dispatch = useDispatch()

    const allGenres = useSelector((state) => state.genres)
    const allVideogames = useSelector((state) => state.videogames)
  
    
    useEffect(() => {
        dispatch(getAllVideogames())
        dispatch(getAllGenres())
    }, [dispatch])

    function handleSubmit(e) {
        e.preventDefault();
        let noRepeat = allVideogames.filter(n => n.name === input.name)
        if(noRepeat.length !== 0) {  
            alert('Sorry, this videogame already exists')
        } else {
            let error = Object.keys(validate(input)) 
            if(error.length !== 0 || !input.genres.length || !input.platforms.length) {
                alert('Please, fill the form. All inputs are required')
                return
            } else {
                dispatch(createVideogame(input));
                setInput({
                    name: "",
                    image: "",
                    description: "",
                    released: "",
                    rating: "",
                    genres: [],
                    platforms: [],
                });
                alert('Congratulations, the videogame was created successfully');
            }
        }
    }

    const handleInputChange = function(e) {
        e.preventDefault()
        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleGenres(e) {
        e.preventDefault()
        setInput({
          ...input,
          genres: [...input.genres, e.target.value],
        });
        e.target.value = 'default' 
    }

    const arrayPlat = [
        'Android',
        'iOS',
        'Linux',
        'macOS',
        'Nintendo Switch',
        'PC',
        'PlayStation 3',
        'PlayStation 4',
        'PlayStation 5',
        'PS Vita',
        'Web',
        'Xbox 360',
        'Xbox One',
        'Xbox Series S/X',
        'Xbox',
    ]

    function handlePlatforms(e) {
        e.preventDefault()
        setInput({
        ...input,
        platforms: [...input.platforms, e.target.value]
        })
        e.target.value = 'default' 
    }

    return (
        <div className={style.content}>
            <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
                <h3 className={style.title}>Create a videogame</h3>
                <label className={style.label} >Name:</label>
                <input className={style.input} type="text" name="name" value={input.name} onChange={(e) => handleInputChange(e)} />
                {errors.name && (
                <p className={style.error}>{errors.name}</p>
                )}
                <br/>
                <br/>
                <br/>
                <label className={style.label}>Description:</label>
                <textarea className={style.input} type="text" name="description" value={input.description} onChange={(e) => handleInputChange(e)} />
                {errors.description && (
                <p className={style.error}>{errors.description}</p>
                )}
                <br/>
                <br/>
                <br/>
                <label className={style.label}>Image:</label>
                <input className={style.input} type="text" name="image" value={input.image} onChange={(e) => handleInputChange(e)} />
                {errors.image && (
                <p className={style.error}>{errors.image}</p>
                )}
                <br/>
                <br/>
                <br/>
                <label className={style.label}>Released:</label>
                <input className={style.input} type="date" name="released" value={input.released} onChange={(e) => handleInputChange(e)} />
                {errors.released && (
                <p className={style.error}>{errors.released}</p>
                )}
                <br/>
                <br/>
                <br/>
                <label className={style.label}>Rating:</label>
                <input className={style.input} type="number" name="rating" value={input.rating} min='1'max='5' onChange={(e) => handleInputChange(e)} />
                {errors.rating && (
                <p className={style.error}>{errors.rating}</p>
                )}
                <br/>
                <br/>
                <br/>
                <div>
                    <label className={style.labelG}>Genres:</label>
                    <select className={style.input} name='select' defaultValue="default" onChange={(e) => handleGenres(e)}>
                        <option value='default' disabled='disabled'>All</option>
                        {allGenres?.map((g) => (
                            <option value={g.name} disabled ={input.genres.length > 3 || input.genres.includes(g)} >{g.name}</option>
                        ))}                  
                    </select>
                    <div className={style.genres}>
                        <p>{input.genres.map((e) => e + " ")}</p>
                    </div>
                    <div>{errors.genres && <p className={style.error}>{ errors.genres }</p>} </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <label className={style.labelG}>Platforms:</label>
                    <select className={style.input} name='select' defaultValue="default" onChange={(e) => handlePlatforms(e)}>
                        <option value='default' disabled='disabled'>All</option>
                        {arrayPlat?.map((e) => (
                            <option value={e} disabled ={input.platforms.length > 3 || input.platforms.includes(e)}>{e}</option>
                        ))} 
                    </select>
                    <div className={style.genres}>
                        <p>{input.platforms.map((e) => e + " ")}</p>
                    </div>
                    <div>{errors.platforms && <p className={style.error}>{ errors.platforms }</p>} </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <button className={style.button} type="submit">Create</button>
                    <Link to={'/home'}>
                        <button className={style.button} type="submit">Back Home</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default CreateVideogame