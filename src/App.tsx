import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios"
import {API_KEY, API_URL, getBackdropImg, IMAGE_DOMAIN_URL} from "./api/api";
import {useDispatch, useSelector} from "react-redux";
import {setLoadingMode, setMovieData, StateType} from "./redux/reducer";
import {StoreType} from "./redux/store";
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import {Preloader} from "./components/UI/Preloader/Preloader";

function App() {
    let movieId = "tt0816692"
    let dispatch = useDispatch()
    let movie = useSelector<StoreType, StateType>(state => state.movie)


    useEffect(() => {
        if (!movie.movieId) {
            dispatch(setLoadingMode(true))
            console.log("useEffect()")
            axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`, {
                baseURL: API_URL
            })
                .then(res => {
                    dispatch(setMovieData(res.data))
                    dispatch(setLoadingMode(false))
                }).catch(error => console.log(error))
        }

    }, []);


    return (
        <div className="App">
            <Header/>
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
