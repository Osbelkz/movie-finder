import {AppLanguageType} from "./app-reducer";

export enum APP_ACTIONS_TYPE {
    CHANGE_APP_LANGUAGE = "App/CHANGE_APP_LANGUAGE"
}


export const changeAppLanguageAC = (language: AppLanguageType) => {
    return {type: APP_ACTIONS_TYPE.CHANGE_APP_LANGUAGE, payload: {language}}
}

export type AppActionsType = ReturnType<typeof changeAppLanguageAC>
