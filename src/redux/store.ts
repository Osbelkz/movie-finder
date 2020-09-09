import {combineReducers, createStore, Store} from "redux";
import {reducer} from "./reducer";


const reducers = combineReducers({
    movie: reducer
})


export type StoreType = ReturnType<typeof reducers>

let store: Store<StoreType> = createStore(reducers);


export default store;

// @ts-ignore
window.store = store
