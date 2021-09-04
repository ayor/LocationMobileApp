import { LOGIN, SET_PLACES, DELETE_PLACE, DESELECT_PLACE } from "../actionTypes/actionTypes";


const initialState = {
    places: [],
    isLoggedIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            let loginStatus = action.payload; 
            return {
                ...state,
                isLoggedIn: loginStatus
            };
        case SET_PLACES:
            let newPlaces = [...state.places].concat(action.payload)
            return {
                ...state,
                places: newPlaces
            };
        case DELETE_PLACE:
            let places = [...state.places].filter(place => place.key !== action.payload);

            return {
                ...state,
                places
            };
        default:
            return state;
    }
}

export default reducer;