import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createVideogame, getAllVideogames, getAllGenres } from '../../redux/actions'
import { Link } from 'react-router-dom';


function validate (input) {

    let errors = {}

    if(!input.name) {
        errors.name = 'El nombre es requerido'
    } else if(!/^[a-zA-Z0-9-() .]+$/.test(input.name)){
        errors.name = 'Solo se aceptan letras, numeros, guiones medios y parentesis'
    }

    // if(input.image.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.image)){
    //     errors.image='invalid URL'
    // }

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
    } else if(input.rating < 0) {
        errors.rating = 'El rating no puede ser un numero negativo'
    }

    return errors 
}


const CreateVideogame = () => {
    
    const [input, setInput] = useState({
        name: '',
        //image: '',
        description: '',
        released: '',
        rating: '',
        genres: [],
        platforms: [],
    });

    const [errors, setErrors] = useState({});

    const dispatch = useDispatch()

    const allGenres = useSelector((state) => state.genres)
    const allPlatforms = useSelector((state) => state.platforms)
    const allVideogames = useSelector((state) => state.videogames)
  
    
    useEffect(() => {
        dispatch(getAllVideogames())
        dispatch(getAllGenres())
        // -------> NO OLVIDAR DISPATCH GENRES Y PLATFORMS
    }, [dispatch])

    function handleSubmit(e) {
        e.preventDefault();
        let noRepeat = allVideogames.filter(n => n.name === input.name)
        console.log("repite nombre", noRepeat)
        if(noRepeat.length !== 0) {  
            alert('Sorry, this videogame already exists')
        } else {
            let error = Object.keys(validate(input)) 
            if(error.length !== 0 ) { /// --------------------> NO OLVIDAR LOS OTROS CONDICIONALES
                alert('Please, fill the form')
                return
            } else {
                dispatch(createVideogame(input));
                setInput({
                    name: "",
                    //image: "",
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

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>Create a videogame</h3>
                <label>Name:</label>
                <input className={errors.name && 'danger'} type="text" name="name" value={input.name} onChange={(e) => handleInputChange(e)} />
                {errors.name && (
                <p className="danger">{errors.name}</p>
                )}
                <br/>
                <br/>
                <br/>
                <label>Description:</label>
                <textarea className={errors.description && 'danger'} type="text" name="description" value={input.description} onChange={(e) => handleInputChange(e)} />
                <br/>
                <br/>
                <br/>
                <label>Released:</label>
                <input className={errors.released && 'danger'} type="date" name="released" value={input.released} onChange={(e) => handleInputChange(e)} />
                <br/>
                <br/>
                <br/>
                <label>Rating:</label>
                <input className={errors.rating && 'danger'} type="number" name="rating" value={input.rating} onChange={(e) => handleInputChange(e)} />
                <br/>
                <br/>
                <br/>
                <div>Genres 
                    <select name='select' defaultValue="default" onChange={(e) => handleInputChange(e)}>
                        {/* <option value='default' disabled='disabled'>Select</option>
                        <option value='asc'>A - Z</option>    */}
                        {allGenres?.map((g) => (
                            <option value={g.name}>{g.name}</option>
                        ))}                  
                    </select>
                </div>
                <br/>
                <br/>
                <br/>
                <div>Platforms 
                    <select name='select' defaultValue="default" onChange={(e) => handleInputChange(e)}>
                        {/* <option value='default' disabled='disabled'>Select</option>
                        <option value='asc'>A - Z</option>                       */}
                        {/* {allPatforms?.map((p) => (
                            <option value={p.name}>{p.name}</option>
                        ))}   */}
                    </select>
                </div>
                <br/>
                <br/>
                <br/>
                <button type="submit">Create</button>
                <Link to={'/home'}>
                    <button type="submit">Back Home</button>
                </Link>
            </form>
        </div>
    )
}

export default CreateVideogame