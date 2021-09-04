import { createStore, combineReducers, compose  } from "redux";
import placeReducer from './reducers/places';

const rootReducers = combineReducers({
    places: placeReducer
})
/**
 * 
 * @returns setups the redux debugeer tool
 * 
 */
let composeEnhancer = compose; 

if(__DEV__){
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
}


const configStore = () => createStore(rootReducers,composeEnhancer());

export default configStore; 