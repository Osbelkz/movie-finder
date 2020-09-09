import React from 'react';
import classes from './MovieCard.module.css'
import {getPosterImg} from "../../api/api";

type PropsType = {
    movie: any
}

const MovieCard = React.memo((props: PropsType) => {
    return (
        <div className={classes.movieCard}>
            <div className={classes.movieCard__row}>
                <div className={classes.movieCard__poster}>
                    <img src={getPosterImg(props.movie.poster_path)} alt=""/>
                </div>
                <div className={classes.movieCard__info}>
                    <h2>{props.movie.original_title}</h2>
                    <p>Release date: {props.movie.release_date}</p>
                    <p>Genres: {props.movie.genres.map((genre: any)=>genre.name).join(", ")}</p>
                    <p>Tagline: {props.movie.tagline}</p>
                    <p>Budget: ${props.movie.budget} </p>
                    <p>Revenue: ${props.movie.revenue}</p>
                    <p>Overview: {props.movie.overview} </p>
                    <p>Vote average: {props.movie.vote_average} ({props.movie.vote_count})</p>
                </div>
            </div>
        </div>
    );
});

export default MovieCard;
