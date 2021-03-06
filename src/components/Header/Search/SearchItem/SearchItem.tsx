import React, {useState} from 'react';
import classes from "./SearchItem.module.scss";
import {MovieListResultType} from "../../../../types/types";
import {getImgPath} from "../../../../api/api";
import {AppLanguageType} from "../../../../redux/app-reducer";
import {MovieIdType} from "../../../../redux/movies-reducer";


type PropsType = {
    movieListData: MovieListResultType
    changeCurrentMovie: (movieId: MovieIdType) => void
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
        <tr className={classes.searchItem} onClick={onClickHandler} onMouseOver={() => setQuickView(true)}
             onMouseLeave={() => setQuickView(false)}>
            {/*<div className={classes.description}>*/}
            {/*    <div>{movieTitle}</div>*/}
            {/*    <div>{vote_average} ({release_date})</div>*/}
            {/*</div>*/}
                <th>{movieTitle}</th>
                <td>{vote_average}</td>
            {movieListData.poster_path && quickView && <QuickView posterPath={movieListData.poster_path}/>}
        </tr>
    );
};

export default SearchItem;


type QuickViewPropsType = {
    posterPath: string | null
}

const QuickView: React.FC<QuickViewPropsType> = (props) => {
    return (
        <div className={classes.quickView}>
            <img src={getImgPath(props.posterPath, "w92")} alt=""/>
        </div>
    );
};
