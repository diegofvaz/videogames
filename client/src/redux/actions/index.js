import axios from 'axios';

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_DETAIL = "GET_DETAIL";
export const GET_NAME = "GET_NAME";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_RATING = "ORDER_RATING";
export const FILTER_GENRES = "FILTER_GENRES";
export const FILTER_VIDEOGAME = "FILTER_VIDEOGAME";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

export const getAllVideogames = () => async dispatch => {
  try {
    const { data } = await axios.get('http://localhost:3001/videogames/');
    dispatch({ type: "GET_ALL_VIDEOGAMES", payload: data });
  } catch (error) {
    console.log(error)
  }
};

export const getDetail = (id) => async dispatch => {
  try {
    const { data } = await axios.get('http://localhost:3001/videogames/' + id);
    dispatch({ type: "GET_DETAIL", payload: data });
  } catch (error) {
    console.log(error)
    // se puede poner error 404
  }
};

export const getName = (name) => async dispatch => {
  try {
    const { data } = await axios.get('http://localhost:3001/videogames?name=' + name);
    dispatch({ type: "GET_NAME", payload: data });
  } catch (error) {
    console.log(error)
    alert(`The videogame ${name} was not found`)
  }
};

export const createVideogame = (videogame) => async dispatch => {
  try {
    const { data } = await axios.post('http://localhost:3001/videogames/', videogame);
    dispatch({ type: "CREATE_VIDEOGAME", payload: data });
  } catch (error) {
    console.log(error)
  }
};

export const getAllGenres = () => async dispatch => {
  try {
    const { data } = await axios.get('http://localhost:3001/genres/');
    dispatch({ type: "GET_ALL_GENRES", payload: data });
  } catch (error) {
    console.log(error)
  }
};

export const orderName = (payload) => {
  return {
    type: "ORDER_NAME",
    payload
  }
};

export const orderRating = (payload) => {
  return {
    type: "ORDER_RATING",
    payload
  }
};

export const filterGenres = (payload) => {
  return {
    type: "FILTER_GENRES",
    payload
  }
};

export const filterVideogame = (payload) => {
  return {
    type: "FILTER_VIDEOGAME",
    payload
  }
};

export function clearDetail(){
  return{
      type: CLEAR_DETAIL,
  }
}