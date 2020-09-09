enum ACTION_TYPES {
    SET_MOVIE = "SET_MOVIE",
    SET_LOADING = "SET_LOADING",
    SET_MOVIE_ID = "SET_MOVIE_ID",
}

export interface StateType {
    movieId: string | number
    movie: typeof test
    isLoading: boolean
}

interface SetMovieActionType {
    type: ACTION_TYPES.SET_MOVIE
    payload: typeof test
}

interface SetLoadingModeActionType {
    type: ACTION_TYPES.SET_LOADING
    payload: { isLoading: boolean }
}

interface SetMovieIdActionType {
    type: ACTION_TYPES.SET_MOVIE_ID
    payload: {movieId:string | number}
}

type ActionTypes = SetMovieActionType | SetLoadingModeActionType | SetMovieIdActionType

const test = {
    adult: false,
    backdrop_path: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    belongs_to_collection: null,
    budget: 165000000,
    genres: [{id: 12, name: "Adventure"}, {id: 18, name: "Drama"}, {id: 878, name: "Science Fiction"}],
    homepage: "http://www.interstellarmovie.net/",
    id: 157336,
    imdb_id: "tt0816692",
    original_language: "en",
    original_title: "Interstellar",
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    popularity: 84.742,
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    production_companies: [
        {id: 923, logo_path: "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png", name: "Legendary Entertainment", origin_country: "US"},
        {id: 9996, logo_path: "/3tvBqYsBhxWeHlu62SIJ1el93O7.png", name: "Syncopy", origin_country: "GB"},
        {id: 13769, logo_path: null, name: "Lynda Obst Productions", origin_country: ""}],
    production_countries: [{iso_3166_1: "GB", name: "United Kingdom"},
        {iso_3166_1: "US", name: "United States of America"}],
    release_date: "2014-11-05",
    revenue: 675120017,
    runtime: 169,
    spoken_languages: [{iso_639_1: "en", name: "English"}],
    status: "Released",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    title: "Interstellar",
    video: false,
    vote_average: 8.3,
    vote_count: 23594,
}
const empty = {
        backdrop_path: "",
        poster_path: "",
        budget: 0,
        genres: [],
        homepage: "",
        id: 0,
        imdb_id: "",
        original_title: "",
        overview: "",
        popularity: 0,
        release_date: "",
        revenue: 0,
        status: "",
        tagline: "",
        title: "",
        vote_average: 0,
        vote_count: 0,
    }

const initialState: StateType = {
    movieId: "tt0816692",
    movie: test,
    isLoading: false
}


export const reducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_MOVIE: {
            console.log(state)
            return {
                ...state,
                movie: action.payload,
                movieId: action.payload.imdb_id
            }
        }
        case ACTION_TYPES.SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        }
        case ACTION_TYPES.SET_MOVIE_ID: {
            return {
                ...state,
                movieId: action.payload.movieId
            }

        }
        default:
            return state
    }

}


export const setMovieData = (movie: any): SetMovieActionType => {
    return {type: ACTION_TYPES.SET_MOVIE, payload: movie}
}
export const setLoadingMode = (isLoading: boolean): SetLoadingModeActionType => {
    return {type: ACTION_TYPES.SET_LOADING, payload: {isLoading}}
}
export const setMovieId = (movieId: string | number): SetMovieIdActionType => {
    return {type: ACTION_TYPES.SET_MOVIE_ID, payload: {movieId}}
}

