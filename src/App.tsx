import React, {useEffect} from 'react';
import './App.css';
import {getBackdropImg} from "./api/api";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import {Preloader} from "./components/UI/Preloader/Preloader";
import {MoviesStateType} from "./redux/moviesReducer";
import {getMovieDataTC} from "./redux/movies-actions";
function App() {

    let dispatch = useDispatch()
    let movie = useSelector<RootStateType, MoviesStateType>(state => state.movie)

    useEffect(() => {
        dispatch(getMovieDataTC(movie.movieId))
    }, [movie.movieId]);

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
                    <MovieCard movieData={movie.movieData}/>
                </>
            }
        </div>
    );
}

export default App;
