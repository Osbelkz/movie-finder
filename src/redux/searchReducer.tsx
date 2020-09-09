enum SEARCH_ACTION_TYPES {
    SET_SEARCH_WORD = "SET_SEARCH_WORD",
    SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS",
    SHOW_RESULTS = "SHOW_RESULTS",
}

interface SearchResultType {
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: string
    genre_ids: Array<number>
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string | null
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}

interface SearchResultsType {
    page: number
    total_results: number
    total_pages: number
    results: Array<SearchResultType>
}

export interface StateType {
    searchWord: string
    searchResults: SearchResultsType | null
    showResults: boolean
}

interface SetSearchWordActionType {
    type: SEARCH_ACTION_TYPES.SET_SEARCH_WORD
    payload: { searchWord: string }
}

interface SetSearchResultsActionType {
    type: SEARCH_ACTION_TYPES.SET_SEARCH_RESULTS
    payload: { searchResults: SearchResultsType }
}

interface ShowResultsActionType {
    type: SEARCH_ACTION_TYPES.SHOW_RESULTS
    payload: { showResults: boolean }
}

type ActionType = SetSearchWordActionType
    | SetSearchResultsActionType
    | ShowResultsActionType

const initialState: StateType = {
    searchWord: "",
    searchResults: null,
    showResults: false,
}

export const searchReducer = (state = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case SEARCH_ACTION_TYPES.SET_SEARCH_WORD: {
            return {
                ...state,
                searchWord: action.payload.searchWord
            }
        }
        case SEARCH_ACTION_TYPES.SET_SEARCH_RESULTS: {
            return {
                ...state,
                searchResults: action.payload.searchResults,
                showResults: true
            }
        }
        case SEARCH_ACTION_TYPES.SHOW_RESULTS: {
            return {
                ...state,
                showResults: action.payload.showResults
            }
        }
        default:
            return state
    }
}

export const setSearchWord = (searchWord: string): SetSearchWordActionType => {
    return {type: SEARCH_ACTION_TYPES.SET_SEARCH_WORD, payload: {searchWord}}
}
export const setSearchResults = (searchResults: SearchResultsType): SetSearchResultsActionType => {
    return {type: SEARCH_ACTION_TYPES.SET_SEARCH_RESULTS, payload: {searchResults}}
}
export const showResults = (showResults: boolean): ShowResultsActionType => {
    return {type: SEARCH_ACTION_TYPES.SHOW_RESULTS, payload: {showResults}}
}
