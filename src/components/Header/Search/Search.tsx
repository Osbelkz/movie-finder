import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from "./Search.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getSearchResults, setSearchWord, showResults, StateType} from "../../../redux/searchReducer";
import {StoreType} from "../../../redux/store";
import SearchItem from "./SearchItem/SearchItem";
import {setMovieId} from "../../../redux/reducer";


const Search = () => {

    const search = useSelector<StoreType, StateType>(state => state.search)
    const movieIdData = useSelector<StoreType>(state => state.movie.movieId)
    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchWord(e.target.value))
    }

    const onChangeCurrentMovie = (movieId: number) => {
        if (!(movieIdData === movieId)) {
            dispatch(setMovieId(movieId))
            dispatch(showResults(false))
        }
    }

    useEffect(() => {
        dispatch(getSearchResults(search.searchWord))
    }, [search.searchWord])

    return (
        <div className={classes.search}>
            <input type="text"
                   className={classes.searchInput}
                   onFocus={() => dispatch(showResults(true))}
                   value={search.searchWord}
                   onChange={onChangeHandler}/>
            {search.showResults
                ? <div className={classes.dropResults}>
                    {search.searchResults?.results.sort((a,b)=>b.popularity-a.popularity).slice(0, 8).map(movie =>
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
