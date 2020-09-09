import React from 'react';
import classes from "./SearchItem.module.css";


type PropsType = {
    original_title: string
    release_date: string
    vote_average: number
    movie_id: number
    changeCurrentMovie: (movieId: number) => void
}

const SearchItem = (props: PropsType) => {

    const onClickHandler = () => {
        props.changeCurrentMovie(props.movie_id)
    }
    return (
        <>
            <div className={classes.searchItem} onClick={onClickHandler}>
                <div>{props.original_title}</div>
                <div>{props.release_date}</div>
            </div>
        </>
    );
};

export default SearchItem;
