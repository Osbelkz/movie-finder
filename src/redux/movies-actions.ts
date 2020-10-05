import {ThunkAction} from "redux-thunk";
import {movieAPI} from "../api/api";
import {MoviesStateType} from "./movies-reducer";
import {MovieFullDataType} from "../types/types";
import {RootStateType} from "./store";


export enum MOVIES_ACTIONS_TYPE {
    SET_MOVIE = "SET_MOVIE",
    SET_LOADING = "SET_LOADING",
    SET_MOVIE_ID = "SET_MOVIE_ID",
}

const makeAction = <T extends MOVIES_ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

interface IStringMap<T> {
    [key: string]: T
}

type IAnyFunction = (...args: any[]) => any;

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;


type SetMovieDataPayloadType = { movieData: MovieFullDataType }
export const setMovieDataAC = makeAction<MOVIES_ACTIONS_TYPE.SET_MOVIE, SetMovieDataPayloadType>(MOVIES_ACTIONS_TYPE.SET_MOVIE)

type SetLoadingModePayloadType = { isLoading: boolean }
export const setLoadingModeAC = makeAction<MOVIES_ACTIONS_TYPE.SET_LOADING, SetLoadingModePayloadType>(MOVIES_ACTIONS_TYPE.SET_LOADING)

type SetMovieIdPayloadType = { movieId: string | number }
export const setMovieIdAC = makeAction<MOVIES_ACTIONS_TYPE.SET_MOVIE_ID, SetMovieIdPayloadType>(MOVIES_ACTIONS_TYPE.SET_MOVIE_ID)

// THUNKS

type ThunkType = ThunkAction<void, RootStateType, unknown, MoviesActionTypes>

export const getMovieDataTC = (movieId: string | number | null): ThunkType => (dispatch, getState) => {
    dispatch(setLoadingModeAC({isLoading: true}))
    movieAPI.getMovie(movieId, getState().app.language)
        .then(res => {
            dispatch(setMovieDataAC({movieData: res.data}))
            dispatch(setLoadingModeAC({isLoading: false}))
        }).catch(error => console.log(error))
}



const MoviesActions = {
    setMovieDataAC,
    setLoadingModeAC,
    setMovieIdAC
}
export type MoviesActionTypes = IActionUnion<typeof MoviesActions>

