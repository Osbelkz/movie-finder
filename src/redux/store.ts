import {applyMiddleware, combineReducers, createStore} from "redux";
import {moviesReducer} from "./moviesReducer";
import {searchReducer} from "./searchReducer";
import thunkMiddleware from "redux-thunk"


const reducers = combineReducers({
    movie: moviesReducer,
    search: searchReducer
})


export type RootStateType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;

// @ts-ignore
window.store = store
