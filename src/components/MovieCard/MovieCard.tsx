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
                    <h3>{props.movie.title}</h3>
                    <table>
                        <tr>
                            <th className={classes.tableHeader}>Release date:</th>
                            <td>{props.movie.release_date}</td>
                        </tr>
                        <tr>
                            <th>Genres:</th>
                            <td>{props.movie.genres.map((genre: any)=>genre.name).join(", ")}</td>
                        </tr>
                        <tr>
                            <th>Tagline:</th>
                            <td>{props.movie.tagline}</td>
                        </tr>
                        <tr>
                            <th>Budget:</th>
                            <td>{props.movie.budget}</td>
                        </tr>
                        <tr>
                            <th>Revenue:</th>
                            <td>{props.movie.revenue}</td>
                        </tr>
                        <tr>
                            <th>Overview:</th>
                            <td>{props.movie.overview}</td>
                        </tr>
                        <tr>
                            <th>Vote average:</th>
                            <td>{props.movie.vote_average} ({props.movie.vote_count})</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
});

export default MovieCard;
