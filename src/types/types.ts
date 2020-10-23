type GenreType = { id: number, name: string }
type ProductionCompanyType = { id: number, name: string, logo_path: string | null, origin_country: string }
type ProductionCountryType = {iso_3166_1: string, name: string}
type SpokenLanguageType = {iso_639_1: string, name: string}
type MovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled'


export interface MovieFullDataType extends MovieCommonDataType {
    belongs_to_collection: null | Object
    budget: number
    genres: GenreType[]
    homepage: string | null
    imdb_id: string | null
    production_companies: ProductionCompanyType[]
    production_countries: ProductionCountryType[]
    revenue: number
    runtime: number | null
    spoken_languages: SpokenLanguageType[]
    status: MovieStatus
    tagline: string | null
}

export interface MovieListResultType extends MovieCommonDataType{
    genre_ids: Array<number>
}

export interface MovieCommonDataType {
    adult: boolean
    backdrop_path: string | null
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string | null
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface SearchMoviesResultType {
    page: number
    total_results: number
    total_pages: number
    results: Array<MovieListResultType>
}
