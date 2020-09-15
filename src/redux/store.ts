import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {reducer} from "./reducer";
import {searchReducer} from "./searchReducer";
import thunkMiddleware from "redux-thunk"


const reducers = combineReducers({
    movie: reducer,
    search: searchReducer
})


export type StoreType = ReturnType<typeof reducers>

let store: Store<StoreType> = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;

// @ts-ignore
window.store = store
