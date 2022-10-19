import axios from 'axios';

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_DETAIL = "GET_DETAIL";
export const GET_NAME = "GET_NAME";
// export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";

export const ORDER_NAME = "ORDER_NAME";
export const ORDER_RATING = "ORDER_RATING";


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