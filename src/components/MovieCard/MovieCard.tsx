import React from 'react';
import classes from './MovieCard.module.css'
import {getPosterImg} from "../../api/api";
import {MovieDataType} from "../../types/types";
import {Preloader} from "../UI/Preloader/Preloader";

type PropsType = {
    movieData: MovieDataType | null
}

const MovieCard = React.memo(({movieData}: PropsType) => {

    if (!movieData) {
        return <Preloader/>
    }

    return (
        <div className={classes.movieCard}>
            <div className={classes.movieCard__row}>
                <div className={classes.movieCard__poster}>
                    <img src={getPosterImg(movieData.poster_path)} alt=""/>
                </div>
                <div className={classes.movieCard__info}>
                    <h2>{movieData.original_title}</h2>
                    <h3>{movieData.title}</h3>
                    <table>
                        <tr>
                            <th className={classes.tableHeader}>Release date:</th>
                            <td>{movieData.release_date}</td>
                        </tr>
                        <tr>
                            <th>Genres:</th>
                            <td>{movieData.genres.map((genre: any)=>genre.name).join(", ")}</td>
                        </tr>
                        <tr>
                            <th>Tagline:</th>
                            <td>{movieData.tagline}</td>
                        </tr>
                        <tr>
                            <th>Budget:</th>
                            <td>{movieData.budget}</td>
                        </tr>
                        <tr>
                            <th>Revenue:</th>
                            <td>{movieData.revenue}</td>
                        </tr>
                        <tr>
                            <th>Overview:</th>
                            <td>{movieData.overview}</td>
                        </tr>
                        <tr>
                            <th>Vote average:</th>
                            <td>{movieData.vote_average} ({movieData.vote_count})</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
});

export default MovieCard;
