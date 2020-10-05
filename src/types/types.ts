type GenreType = { id: number, name: string }
type ProductionCompanyType = { id: number, name: string, logo_path: string | null, origin_country: string }
type ProductionCountryType = {iso_3166_1: string, name: string}
type SpokenLanguageType = {iso_639_1: string, name: string}
type MovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled'



export type MovieFullDataType = {
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: null | Object,
    budget: number,
    genres: GenreType[],
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: ProductionCompanyType[],
    production_countries: ProductionCountryType[],
    release_date: string, //format: date
    revenue: number,
    runtime: number | null,
    spoken_languages: SpokenLanguageType[],
    status: MovieStatus,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export interface MovieListResultType {
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

export interface SearchMoviesResultType {
    page: number
    total_results: number
    total_pages: number
    results: Array<MovieListResultType>
}
