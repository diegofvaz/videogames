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
    } else if(input.rating < 1) {
        errors.rating = 'El rating mínimo debe ser 1'
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
    const allVideogames = useSelector((state) => state.videogames)
  
    
    useEffect(() => {
        dispatch(getAllVideogames())
        dispatch(getAllGenres())
    }, [dispatch])

    function handleSubmit(e) {
        e.preventDefault();
        let noRepeat = allVideogames.filter(n => n.name === input.name)
        console.log("repite nombre", noRepeat)
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

    function handleSelect(e) {
        setInput({
          ...input,
          genres: [...input.genres, e.target.value],
        });
    }

    const arrayPlat=[
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
    
    const handlePlatform =(e)=>{
        let array= input.platforms
        let ver= array.indexOf(e.target.value)
        console.log('ver', ver)
        if(ver>=0){array.splice(ver,1)}
        else{array.push(e.target.value)}
        setInput({
        ...input,
        arrayPlat:array
        })
        console.log('arrayPlar', arrayPlat)
        const validations = validate(input);
        setErrors(validations)
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
                {errors.description && (
                <p className="danger">{errors.description}</p>
                )}
                <br/>
                <br/>
                <br/>
                <label>Released:</label>
                <input className={errors.released && 'danger'} type="date" name="released" value={input.released} onChange={(e) => handleInputChange(e)} />
                {errors.released && (
                <p className="danger">{errors.released}</p>
                )}
                <br/>
                <br/>
                <br/>
                <label>Rating:</label>
                <input className={errors.rating && 'danger'} type="number" name="rating" value={input.rating} onChange={(e) => handleInputChange(e)} />
                {errors.rating && (
                <p className="danger">{errors.rating}</p>
                )}
                <br/>
                <br/>
                <br/>
                <div>Genres:
                    <select name='select' defaultValue="default" onChange={(e) => handleSelect(e)}>
                        {allGenres?.map((g) => (
                            <option value={g.name}>{g.name}</option>
                        ))}                  
                    </select>
                    <div className="selected">
                        {input.genres.map((el) => el + " ")}
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div>Platforms: 
                    <div>
                        {arrayPlat.map(plat=> {
                            return(
                                <div>
                                    <input              
                                        type='checkbox'
                                        id={plat}
                                        name={plat}
                                        value={ plat }
                                        disabled ={input.platforms.length > 4 && !input.platforms.includes(plat)} 
                                        selected={ input.platforms.includes(plat) } onChange={ handlePlatform }
                                    />
                                    <label for={plat} >{plat}</label>
                                
                                </div>
                            )})
                        }
                    </div>
                    <div>{errors.platforms && <p>{ errors.platforms }</p>} </div>
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