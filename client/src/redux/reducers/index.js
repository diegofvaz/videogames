import { GET_ALL_VIDEOGAMES, GET_VIDEOGAME, GET_NAME, CREATE_VIDEOGAME} from "../actions/index";

const initialState = {
videogames: [],
videogame: {},
};
  
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_VIDEOGAMES:  // home
        return {
            ...state,
            videogames: action.payload
        }
        case GET_VIDEOGAME:  // detalle
        return {
            ...state,
            videogame: action.payload
        }
        case GET_NAME:   // searchbar
        return {
            ...state,
            videogames: action.payload
        }
        // case CREATE_VIDEOGAME:
        // return {
        //     ...state,
        //     videogames: state.videogames.concat(action.payload)
        // }
        default:
        return state;
    };
};

export default rootReducer;