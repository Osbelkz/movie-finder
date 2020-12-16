import React, {useCallback} from 'react';
import classes from "./Search.module.css";
import SearchItem from "./SearchItem/SearchItem";
import useComponentVisible from '../../../hooks/useComponentVisible';
import {AppLanguageType} from "../../../redux/app-reducer";
import {SearchMoviesResultType} from "../../../types/types";
import {MovieIdType} from "../../../redux/movies-reducer";


type PropsType = {
    searchResults: SearchMoviesResultType | null
    language: AppLanguageType
    searchWord: string
    changeCurrentMovieCard: (movieId: MovieIdType) => void
    changeSearchWord: (searchWord: string) => void
}

const Search: React.FC<PropsType> = ({language, searchResults, searchWord, changeCurrentMovieCard, changeSearchWord}) => {

    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);

    const onFocus = () => {
        setIsComponentVisible(true)
    }
    const changeCurrentMovieCardHandler = useCallback((movieId: MovieIdType) => {
        changeCurrentMovieCard(movieId)
        setIsComponentVisible(false)
    }, [changeCurrentMovieCard])

    return (
        <div className={classes.search} ref={ref}>
            <input type="text"
                   className={classes.searchInput}
                   onFocus={onFocus}
                   value={searchWord}
                   onChange={(e) => changeSearchWord(e.currentTarget.value)}
            />
            {isComponentVisible &&
            <div className={classes.dropResults}>
                <table className={classes.resultsTable}>
                    <tbody>
                    {searchResults?.results
                        .sort((a, b) => b.vote_average - a.vote_average)
                        .slice(0, 8)
                        .map(movie =>
                            <SearchItem
                                changeCurrentMovie={changeCurrentMovieCardHandler}
                                movieListData={movie}
                                key={movie.id}
                                appLanguage={language}
                            />)}
                    </tbody>
                </table>

            </div>}
        </div>
    );
};

export default Search;
