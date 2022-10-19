import { GET_ALL_VIDEOGAMES, GET_VIDEOGAME, GET_NAME, CREATE_VIDEOGAME, ORDER_NAME, ORDER_RATING} from "../actions/index";

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
            return {
                ...state,
                videogames: orderName
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
            return{
                ...state,
                videogames: action.payload === 'all' ? state.videogames : orderRating
            }
        default:
        return state;
    };
};

export default rootReducer;