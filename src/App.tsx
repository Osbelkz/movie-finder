import React, {useEffect} from 'react';
import './App.scss';
import {getBackdropImg} from "./api/api";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import {Preloader} from "./components/UI/Preloader/Preloader";
import {MoviesStateType} from "./redux/movies-reducer";
import {getMovieDataTC} from "./redux/movies-actions";
import {AppLanguageType} from "./redux/app-reducer";
import tmdbLogo from "./assets/tmdb_logo.svg";


function App() {

    const dispatch = useDispatch()
    const movie = useSelector<RootStateType, MoviesStateType>(state => state.movie)
    const lang = useSelector<RootStateType, AppLanguageType>(state => state.app.language)

    useEffect(() => {
        dispatch(getMovieDataTC(movie.movieId))
    }, [movie.movieId, lang]);

    let backdropURL = "";
    if (movie.movieData) backdropURL = getBackdropImg(movie.movieData.backdrop_path)

    return (
        <div className="App" style={{backgroundImage: `url(${backdropURL})`}}>
            <Header/>
            <main>
                {movie.isLoading
                    ? <Preloader/>
                    : <MovieCard movieData={movie.movieData} language={lang}/>}
            </main>
            <footer>
                <img src={tmdbLogo} className={"TMDB-logo"} alt="tmdbLogo"/>
            </footer>
        </div>
    );
}

export default App;
