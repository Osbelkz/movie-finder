import React, {useEffect} from 'react';
import './App.css';
import {getBackdropImg} from "./api/api";
import {useDispatch, useSelector} from "react-redux";
import {getMovieData, StateType} from "./redux/reducer";
import {StoreType} from "./redux/store";
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import {Preloader} from "./components/UI/Preloader/Preloader";
function App() {

    let dispatch = useDispatch()
    let movie = useSelector<StoreType, StateType>(state => state.movie)

    useEffect(() => {
        dispatch(getMovieData(movie.movieId))
    }, [movie.movieId]);

    let backdrop = getBackdropImg(movie.movie.backdrop_path)

    return (
        <div className="App">
            <Header/>
            {movie.isLoading
                ? <Preloader/>
                : <>
                    <div className={"backdrop"} style={{backgroundImage: `url(${backdrop})`}}/>
                    <div>

                    </div>
                    <MovieCard movie={movie.movie}/>
                </>
            }
        </div>
    );
}

export default App;
