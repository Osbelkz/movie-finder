import axios from "axios"

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
        language: "ru-RU"
    }
})

export const movieAPI = {
    getMovie(movieId: string | number) {
        return instance.get(`movie/${movieId}`)
    }
}

export const searchAPI = {
    getSearchResults(searchWord: string){
        return instance.get(`/search/movie`, {
            params: {
                query: searchWord,
                page: "1"
            }
        })
    }
}



//additional functions

export const getBackdropImg = (backdrop: string): string => {
    return `${IMAGE_DOMAIN_URL}original/${backdrop}`
}
export const getPosterImg = (poster: string): string => {
    return `${IMAGE_DOMAIN_URL}w342/${poster}`
}
