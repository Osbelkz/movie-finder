import React, {ChangeEvent, useEffect} from 'react';
import classes from "./Search.module.css";
import {useDispatch, useSelector} from "react-redux";
import {SearchStateType} from "../../../redux/search-reducer";
import {RootStateType} from "../../../redux/store";
import SearchItem from "./SearchItem/SearchItem";
import {getSearchResultsTC, setSearchWordAC} from '../../../redux/search-actions';
import {setMovieIdAC} from "../../../redux/movies-actions";
import useComponentVisible from '../../../hooks/useComponentVisible';
import {AppLanguageType} from "../../../redux/app-reducer";


const Search = () => {


    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);
    const search = useSelector<RootStateType, SearchStateType>(state => state.search)
    const movieIdData = useSelector<RootStateType>(state => state.movie.movieId)
    const lang = useSelector<RootStateType, AppLanguageType>(state => state.app.language)
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
    }, [search.searchWord, lang])


    return (
        <div className={classes.search} ref={ref}>
            <input type="text"
                   className={classes.searchInput}
                   onFocus={onFocus}
                   value={search.searchWord}
                   onChange={onChangeHandler}
            />
            {isComponentVisible &&
            <div className={classes.dropResults}>
                {search.searchResults?.results
                    .sort((a, b) => b.vote_average - a.vote_average)
                    .slice(0, 8)
                    .map(movie =>
                        <SearchItem
                            changeCurrentMovie={onChangeCurrentMovieCard}
                            movieListData={movie}
                            key={movie.id}
                            appLanguage={lang}
                        />)}
            </div>}
        </div>
    );
};

export default Search;
