import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios"
import {API_KEY, API_URL, getBackdropImg, IMAGE_DOMAIN_URL} from "./api/api";
import {useDispatch, useSelector} from "react-redux";
import {setLoadingMode, setMovieData, setMovieId, StateType} from "./redux/reducer";
import {StoreType} from "./redux/store";
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import {Preloader} from "./components/UI/Preloader/Preloader";

function App() {
    let dispatch = useDispatch()
    let movie = useSelector<StoreType, StateType>(state => state.movie)

    useEffect(() => {
            dispatch(setLoadingMode(true))
            axios.get(`movie/${movie.movieId}?api_key=${API_KEY}&language=en-US`, {
                baseURL: API_URL
            })
                .then(res => {
                    dispatch(setMovieData(res.data))
                    dispatch(setLoadingMode(false))
                }).catch(error => console.log(error))
    }, [movie.movieId]);

    const onChangeCurrentMovie = (movieId: string) => {
        if (!(movie.movieId == movieId)) {
            dispatch(setMovieId(movieId))
            console.log("movie id changed")
        }
    }

    return (
        <div className="App">
            <Header/>
            <button onClick={()=>onChangeCurrentMovie("tt1375666")}>Inception</button>
            <button onClick={()=>onChangeCurrentMovie("tt0816692")}>Interstellar</button>
            {movie.isLoading
                ? <Preloader/>
                : <>
                    <div className={"backdrop"}>
                        <img src={getBackdropImg(movie.movie.backdrop_path)} alt=""/>
                    </div>
                    <MovieCard movie={movie.movie}/>
                </>
            }
        </div>
    );
}

export default App;
