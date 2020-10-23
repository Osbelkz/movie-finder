import React, {useEffect} from 'react';
import {Preloader} from "../UI/Preloader/Preloader";
import MovieCard from "./MovieCard";
import {getMovieDataTC} from "../../redux/actions/movies-actions";
import {getImgPath} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {MovieIdType} from "../../redux/movies-reducer";
import {AppLanguageType} from "../../redux/app-reducer";
import { MovieFullDataType } from '../../types/types';

const MovieCardContainer = React.memo(() => {

    console.log("movie card container")

    const dispatch = useDispatch()
    const movieId = useSelector<RootStateType, MovieIdType>(state => state.movie.movieId)
    const isLoading = useSelector<RootStateType, boolean>(state => state.movie.isLoading)
    const movieData = useSelector<RootStateType, MovieFullDataType | null>(state => state.movie.movieData)
    const lang = useSelector<RootStateType, AppLanguageType>(state => state.app.language)

    useEffect(() => {
        dispatch(getMovieDataTC(movieId))
    }, [movieId, lang]);
    let backdropURL = "";
    if (movieData) backdropURL = getImgPath(movieData.backdrop_path, "w780")

    return (
        <div className={"movieCardContainer"} style={{backgroundImage: `url(${backdropURL})`}}>
            {isLoading
                ? <Preloader/>
                : <MovieCard movieData={movieData} language={lang}/>}
        </div>
    );
});

export default MovieCardContainer;
