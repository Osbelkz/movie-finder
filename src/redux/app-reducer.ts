import { AppActionsType, APP_ACTIONS_TYPE } from "./actions/app-actions";

type AppStateType = typeof initialState

export type AppLanguageType = "en-EN" | "ru-RU"

const initialState = {
    language: "en-EN" as AppLanguageType,
}

export const appReducer = (state = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case APP_ACTIONS_TYPE.CHANGE_APP_LANGUAGE: {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state;
    }
}
