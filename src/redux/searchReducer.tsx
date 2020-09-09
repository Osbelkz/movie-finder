
enum SEARCH_ACTION_TYPES {
    SET_SEARCH_WORD ="SET_SEARCH_WORD"
}


export interface StateType {
    searchWord: string
    searchResults: Array<any>
}

interface SetSearchWordActionType {
    type: SEARCH_ACTION_TYPES.SET_SEARCH_WORD
    payload: {searchWord: string}
}


type ActionType = SetSearchWordActionType

const initialState: StateType = {
    searchWord: "",
    searchResults: []
}

export const searchReducer = (state = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case SEARCH_ACTION_TYPES.SET_SEARCH_WORD: {
            return {
                ...state,
                searchWord : action.payload.searchWord
            }
        }
        default:
            return state
    }
}

export const setSearchWord = (searchWord: string): SetSearchWordActionType => {
    return {type: SEARCH_ACTION_TYPES.SET_SEARCH_WORD, payload: {searchWord}}
}
