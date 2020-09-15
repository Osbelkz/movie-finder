import { MovieActionTypes } from "./reducer"
import { SearchActionTypes } from "./searchReducer"


export type DispatchType = (action: DispatchActionType) => void

export type DispatchActionType =
    MovieActionTypes | SearchActionTypes

