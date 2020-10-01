import { MoviesActionTypes } from "./movies-actions"
import {MovieDataType} from "../types/types";
import {MOVIES_ACTIONS_TYPE} from "./movies-actions";

export interface MoviesStateType {
    movieId: string | number | null
    movieData: MovieDataType | null
    isLoading: boolean
}

const initialState: MoviesStateType = {
    movieId: "tt0816692",
    movieData: null,
    isLoading: false
}


export const moviesReducer = (state = initialState, action: MoviesActionTypes): MoviesStateType => {
    switch (action.type) {
        case MOVIES_ACTIONS_TYPE.SET_MOVIE: {
            return {
                ...state,
                ...action.payload,
                movieId: action.payload.movieData.imdb_id
            }
        }
        case MOVIES_ACTIONS_TYPE.SET_LOADING: {
            return {
                ...state,
                ...action.payload
            }
        }
        case MOVIES_ACTIONS_TYPE.SET_MOVIE_ID: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }

}


