
// API DOMAIN
export const API_URL = "https://api.themoviedb.org/3"
// API NAME Get Trending By Week
export const API_NAME = "/trending/all/week"
// API KEY For Security
export const API_KEY = "5de81459140dd5d712d2ee9802f7b03d"
export const IMAGE_DOMAIN_URL = "https://image.tmdb.org/t/p/"
//EXAMPLE to get Movies List Hot Trends
//https://api.themoviedb.org/3/trending/all/week?api_key=your_api_key


//additional functions

export const getBackdropImg = (backdrop: string): string => {
    return `${IMAGE_DOMAIN_URL}original/${backdrop}`
}
export const getPosterImg = (poster: string): string => {
    return `${IMAGE_DOMAIN_URL}w342/${poster}`
}
