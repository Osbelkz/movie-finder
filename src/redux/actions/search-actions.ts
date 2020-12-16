import {searchAPI} from "../../api/api";
import {SearchMoviesResultType} from "../../types/types";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";

export enum SEARCH_ACTIONS_TYPE {
    SET_SEARCH_WORD = "SET_SEARCH_WORD",
    SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS",
}

const makeAction = <T extends SEARCH_ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

interface IStringMap<T> {
    [key: string]: T
}

type IAnyFunction = (...args: any[]) => any;

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

//                  ACTIONS

type SetSearchWordPayloadType = {
    searchWord: string
}
export const setSearchWordAC = makeAction<SEARCH_ACTIONS_TYPE.SET_SEARCH_WORD, SetSearchWordPayloadType>(SEARCH_ACTIONS_TYPE.SET_SEARCH_WORD)

type SetSearchResultsPayloadType = SearchMoviesResultType
export const setSearchResultsAC = makeAction<SEARCH_ACTIONS_TYPE.SET_SEARCH_RESULTS, SetSearchResultsPayloadType>(SEARCH_ACTIONS_TYPE.SET_SEARCH_RESULTS)


//                  THUNKS

type ThunkType = ThunkAction<void, RootStateType, unknown, SearchActionsTypes>

export const getSearchResultsTC = (searchWord: string): ThunkType => (dispatch, getState) => {
    console.log(getState().app.language)
    searchAPI.getSearchResults(searchWord, getState().app.language)
        .then(res => {
            dispatch(setSearchResultsAC(res.data))
        }).catch(error => console.log(error))
}


const SearchActions = {
    setSearchWordAC,
    setSearchResultsAC,
}
export type SearchActionsTypes = IActionUnion<typeof SearchActions>

