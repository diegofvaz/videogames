import { GET_ALL_VIDEOGAMES, GET_DETAIL, GET_NAME, CREATE_VIDEOGAME, GET_ALL_GENRES, ORDER_NAME, ORDER_RATING, FILTER_GENRES} from "../actions/index";

const initialState = {
    allVideogames:[],
    videogames: [],
    genres: [],
    videogame: {},
};
  
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_VIDEOGAMES:  // home
            return {
                ...state,
                allVideogames: action.payload,
                videogames: action.payload
            }
        case GET_DETAIL:  // detalle
            return {
                ...state,
                videogame: action.payload
            }
        case GET_NAME:   // searchbar
            return {
                ...state,
                videogames: action.payload
            }
        case CREATE_VIDEOGAME:    // create
            return {
                ...state,
                videogames: state.videogames.concat(action.payload)
            }
        case GET_ALL_GENRES:
            return{
                ...state,
                genres: action.payload
            }
        case ORDER_NAME:     // orden por nombre
            let orderName = [...state.videogames]
            orderName = orderName.sort((a,b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) {
                return action.payload === 'asc' ? -1 : 1
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()) {
                return action.payload === 'asc' ? 1 : -1
                }
                return 0
            })
            // return {
            //     ...state,
            //     videogames: orderName
            // }
            return{
                ...state,
                videogames: action.payload === "all" ? state.allVideogames : orderName
            }
        case ORDER_RATING:      // orden por rating
            let orderRating = [...state.videogames]
            orderRating = orderRating.sort((a,b) => {
                if(a.rating < b.rating) {
                return action.payload === 'rMin' ? -1 : 1
                }
                if(a.rating > b.rating) {
                return action.payload === 'rMin' ? 1 : -1
                }
                return 0
            })
            // return{
            //     ...state,
            //     videogames: orderRating
            // }
            return{
                ...state,
                videogames: action.payload === "all" ? state.allVideogames : orderRating
            }
        case FILTER_GENRES:    // filter genres
            let allGames = state.allVideogames
            let filterGenres = allGames.filter(v => 
            v.genres?.some(e => e.toLowerCase() === action.payload.toLowerCase()))
            return{
                ...state,
                videogames: action.payload === "all" ? state.allVideogames : filterGenres
            }
        default:
        return state;
    };
};

export default rootReducer;