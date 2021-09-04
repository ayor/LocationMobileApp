import { LOGIN, SET_PLACES, DELETE_PLACE} from "../actionTypes/actionTypes";

export const Login = (loginStatus) => {
    return {
        type: LOGIN,
        payload: loginStatus
    }
}

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        payload: key
    }
}
export const setPlaces = (place) => {
    return {
        type: SET_PLACES,
        payload: place
    }
}