import axios from "axios"
import {AppLanguageType} from "../redux/app-reducer";

// API DOMAIN
export const API_URL = "https://api.themoviedb.org/3"
// API NAME Get Trending By Week
export const API_NAME = "/trending/all/week"
// API KEY For Security
export const API_KEY = "5de81459140dd5d712d2ee9802f7b03d"
export const IMAGE_DOMAIN_URL = "https://image.tmdb.org/t/p/"
//EXAMPLE to get Movies List Hot Trends
//https://api.themoviedb.org/3/trending/all/week?api_key=your_api_key


let instance = axios.create({
    baseURL: API_URL,
    params: {
        api_key: API_KEY,
    }
})

export const movieAPI = {
    getMovie(movieId: string | number | null, lang: AppLanguageType) {
        return instance.get(`movie/${movieId}`, {
            params: {
                language: lang
            }
        })
    }
}

export const searchAPI = {
    getSearchResults(searchWord: string, lang: AppLanguageType){
        return instance.get(`/search/movie`, {
            params: {
                language: lang,
                query: searchWord,
                page: "1",

            }
        })
    }
}

export const testAPI = {
    getCards() {
        return axios.get("https://api.pokemontcg.io/v1/cards")
    }
}



//additional functions

export type imgSizeType = "w780" | "w342" | "w92"

export const getImgPath = (path: string | null, size: imgSizeType): string => {
    return `${IMAGE_DOMAIN_URL}${size}/${path}`
}
