import {applyMiddleware, combineReducers, createStore} from "redux";
import {moviesReducer} from "./movies-reducer";
import {searchReducer} from "./search-reducer";
import thunkMiddleware from "redux-thunk"
import {appReducer} from "./app-reducer";


const reducers = combineReducers({
    movie: moviesReducer,
    search: searchReducer,
    app: appReducer,
})


export type RootStateType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;

// @ts-ignore
window.store = store
