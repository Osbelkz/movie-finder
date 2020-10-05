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


function App() {

    const dispatch = useDispatch()
    const movie = useSelector<RootStateType, MoviesStateType>(state => state.movie)
    const lang = useSelector<RootStateType, AppLanguageType>(state => state.app.language)

    useEffect(() => {
        dispatch(getMovieDataTC(movie.movieId))
    }, [movie.movieId, lang]);

    let backdrop = "";
    if (movie.movieData) {
        backdrop = getBackdropImg(movie.movieData.backdrop_path)
    }

    return (
        <div className="App">
            <Header/>
            {movie.isLoading
                ? <Preloader/>
                : <>
                    <div className={"backdrop"} style={{backgroundImage: `url(${backdrop})`}}/>
                    <div>

                    </div>
                    <MovieCard movieData={movie.movieData} language={lang}/>
                </>
            }
        </div>
    );
}

export default App;
