import React, {ChangeEvent, useCallback, useEffect} from 'react';
import Search from "./Search";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {AppLanguageType} from "../../../redux/app-reducer";
import {getSearchResultsTC, setSearchWordAC} from "../../../redux/actions/search-actions";
import {setMovieIdAC} from "../../../redux/actions/movies-actions";
import { MovieIdType } from '../../../redux/movies-reducer';
import {SearchMoviesResultType} from "../../../types/types";

const SearchContainer = React.memo(() => {
    console.log("search container")
    const searchWord = useSelector<RootStateType, string>(state => state.search.searchWord)
    const searchResults = useSelector<RootStateType, SearchMoviesResultType | null>(state => state.search.searchResults)
    const currentMovieId = useSelector<RootStateType, MovieIdType>(state => state.movie.movieId)
    const language = useSelector<RootStateType, AppLanguageType>(state => state.app.language)
    const dispatch = useDispatch()
    const dispatchStable = useCallback(dispatch, [])

    const changeSearchWord = useCallback((searchWord: string) => {
        dispatchStable(setSearchWordAC({searchWord}))
    }, [])

    const changeCurrentMovieCard = useCallback((movieId: MovieIdType) => {
        if (currentMovieId !== movieId) {
            dispatchStable(setMovieIdAC({movieId}))
        }
    },[currentMovieId])

    useEffect(() => {
        if (searchWord.length >= 3) {
            dispatchStable(getSearchResultsTC(searchWord))
        }
    }, [searchWord, language])

    return (
        <Search language={language}
                searchResults={searchResults}
                searchWord={searchWord}
                changeCurrentMovieCard={changeCurrentMovieCard}
                changeSearchWord={changeSearchWord}
        />
    );
})

export default SearchContainer;
