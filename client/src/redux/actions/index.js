import axios from 'axios';

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
// export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";


export const getAllVideogames = () => async dispatch => {
  try {
    const { data } = await axios.get('http://localhost:3001/videogames/');
    dispatch({ type: "GET_ALL_VIDEOGAMES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getVideogame = (id) => async dispatch => {
  try {
    const data = await axios.get('http://localhost:3001/videogames/' + id);
    dispatch({ type: "GET_VIDEOGAME", payload: data });
  } catch (error) {
    console.log(error);
  }
};