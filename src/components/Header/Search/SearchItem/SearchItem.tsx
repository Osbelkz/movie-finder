import React, {useState} from 'react';
import classes from "./SearchItem.module.css";
import {MovieListResultType} from "../../../../types/types";
import {getMiniPosterImg} from "../../../../api/api";
import {AppLanguageType} from "../../../../redux/app-reducer";


type PropsType = {
    movieListData: MovieListResultType
    changeCurrentMovie: (movieId: number) => void
    appLanguage: AppLanguageType
}

const SearchItem: React.FC<PropsType> = ({movieListData, changeCurrentMovie, appLanguage}) => {

    const {id, release_date, vote_average, original_title, title} = movieListData
    let movieTitle = appLanguage === "en-EN" ? original_title : title
    let [quickView, setQuickView] = useState(false)

    const onClickHandler = () => {
        changeCurrentMovie(id)
    }
    return (
        <>
            <div className={classes.searchItem} onClick={onClickHandler} onMouseOver={()=>setQuickView(true)} onMouseLeave={()=>setQuickView(false)}>
                <div className={classes.description}>
                    <div>{movieTitle}</div>
                    <div>{vote_average} ({release_date})</div>
                </div>
                {quickView && <QuickView posterPath={movieListData.poster_path}/>}
            </div>
        </>
    );
};

export default SearchItem;


type QuickViewPropsType = {
    posterPath: string | null
}

const QuickView: React.FC<QuickViewPropsType> = (props) => {
    return (
        <div className={classes.quickView}>
            <img src={getMiniPosterImg(props.posterPath)} alt=""/>
        </div>
    );
};
