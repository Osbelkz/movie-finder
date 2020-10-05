import { SearchMoviesResultType } from "../types/types";
import {SEARCH_ACTIONS_TYPE, SearchActionsTypes} from "./search-actions";

export interface SearchStateType {
    searchWord: string
    searchResults: SearchMoviesResultType | null
}

const initialState: SearchStateType = {
    searchWord: "",
    searchResults: null,
}

export const searchReducer = (state = initialState, action: SearchActionsTypes): SearchStateType => {
    switch (action.type) {
        case SEARCH_ACTIONS_TYPE.SET_SEARCH_WORD: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SEARCH_ACTIONS_TYPE.SET_SEARCH_RESULTS: {
            return {
                ...state,
                searchResults: {...action.payload},
            }
        }
        default:
            return state
    }
}

