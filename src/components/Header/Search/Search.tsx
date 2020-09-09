import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from "./Search.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setSearchResults, setSearchWord, StateType} from "../../../redux/searchReducer";
import {StoreType} from "../../../redux/store";
import SearchItem from "./SearchItem/SearchItem";
import axios from "axios"
import {API_KEY, API_URL} from "../../../api/api";
import {setMovieId} from "../../../redux/reducer";


const Search = () => {

    let [showResults, setShowResults] = useState<boolean>(false)

    const search = useSelector<StoreType, StateType>(state => state.search)
    const movieIdData = useSelector<StoreType>(state => state.movie.movieId)
    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchWord(e.target.value))
    }

    const onChangeCurrentMovie = (movieId: number) => {
        if (!(movieIdData == movieId)) {
            dispatch(setMovieId(movieId))
            setShowResults(false)
        }
    }

    useEffect(() => {
        if (search.searchWord.length >= 3) {
            // dispatch(showResults(true))
            setShowResults(true)
            axios.get(`/search/movie?api_key=${API_KEY}&language=en-EN&query=${search.searchWord}&page=1`, {
                baseURL: API_URL
            })
                .then(res => {
                    dispatch(setSearchResults(res.data))
                }).catch(error => console.log(error))
        } else {
            setShowResults(false)
        }
    }, [search.searchWord])

    return (
        <div className={classes.search}>
            <input type="text"
                   onFocus={() => setShowResults(true)}
                   value={search.searchWord}
                   onChange={onChangeHandler}/>
            {showResults
                ? <div className={classes.dropResults}>
                    {search.searchResults?.results.slice(0, 8).map(movie =>
                        <SearchItem
                            changeCurrentMovie={onChangeCurrentMovie}
                            original_title={movie.original_title}
                            key={movie.id}
                            movie_id={movie.id}
                            release_date={movie.release_date}
                            vote_average={movie.vote_average}/>)}
                </div>
                : null
            }

        </div>
    );
};

export default Search;
