import React, {ChangeEvent, useEffect} from 'react';
import classes from "./Search.module.css";
import {useDispatch, useSelector} from "react-redux";
import {SearchStateType} from "../../../redux/searchReducer";
import {RootStateType} from "../../../redux/store";
import SearchItem from "./SearchItem/SearchItem";
import {getSearchResultsTC, setSearchWordAC} from '../../../redux/search-actions';
import {setMovieIdAC} from "../../../redux/movies-actions";
import useComponentVisible from '../../../hooks/useComponentVisible';


const Search = () => {

    const search = useSelector<RootStateType, SearchStateType>(state => state.search)
    const movieIdData = useSelector<RootStateType>(state => state.movie.movieId)
    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchWordAC({searchWord: e.target.value}))
    }

    const onChangeCurrentMovieCard = (movieId: number) => {
        if (movieIdData !== movieId) {
            dispatch(setMovieIdAC({movieId}))
            setIsComponentVisible(false)
        }
    }

    const onFocus = () => {
        setIsComponentVisible(true)
    }

    useEffect(() => {
        if (search.searchWord.length >= 3) {
            dispatch(getSearchResultsTC(search.searchWord))
        }
    }, [search.searchWord])


    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

    return (
        <div className={classes.search} ref={ref}>
            <input type="text"
                   className={classes.searchInput}
                   onFocus={onFocus}
                   value={search.searchWord}
                   onChange={onChangeHandler}
            />
            {isComponentVisible && <div className={classes.dropResults}>
                    {search.searchResults?.results
                        .sort((a, b) => b.popularity - a.popularity)
                        .slice(0, 8)
                        .map(movie =>
                            <SearchItem
                                changeCurrentMovie={onChangeCurrentMovieCard}
                                original_title={movie.original_title}
                                key={movie.id}
                                movie_id={movie.id}
                                release_date={movie.release_date}
                                vote_average={movie.vote_average}/>)}
                </div>
            }

        </div>
    );
};

export default Search;
