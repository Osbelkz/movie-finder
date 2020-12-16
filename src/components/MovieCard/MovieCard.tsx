import React from 'react';
import classes from './MovieCard.module.scss'
import {getImgPath} from "../../api/api";
import {MovieFullDataType} from "../../types/types";
import {Preloader} from "../UI/Preloader/Preloader";
import {AppLanguageType} from "../../redux/app-reducer";
import noPoster from "../../assets/no-poster-available.jpg"

type PropsType = {
    movieData: MovieFullDataType | null
    language: AppLanguageType
}

const MovieCard = React.memo(({movieData, language}: PropsType) => {
    console.log("movie card")
    const enLang = {
        release_date: "Release date:",
        genres: "Genres:",
        tagline: "Tagline:",
        budget: "Budget:",
        revenue: "Revenue:",
        overview: "Overview:",
        vote_average: "Vote average:"
    }

    const ruLang = {
        release_date: "Дата релиза:",
        genres: "Жанры:",
        tagline: "Девиз:",
        budget: "Бюджет:",
        revenue: "Сборы:",
        overview: "Описание:",
        vote_average: "Средняя оценка:"
    }

    let localization = language === "en-EN" ? enLang : ruLang

    if (!movieData) {
        return <Preloader/>
    }

    let posterPath = movieData.poster_path ? getImgPath(movieData.poster_path, "w342") : noPoster

    return (
        <div className={classes.movieCard}>
            <div className={classes.movieCard__row}>
                <div className={classes.movieCard__poster}>
                    <img src={posterPath} alt=""/>
                </div>
                <div className={classes.movieCard__info}>
                    {/*<h2>{movieData.original_title}</h2>*/}
                    <h3>{movieData.title}</h3>
                    <table>
                        <tbody>
                        <tr>
                            <th className={classes.tableHeader}>{localization.release_date}</th>
                            <td>{movieData.release_date}</td>
                        </tr>
                        <tr>
                            <th>{localization.genres}</th>
                            <td>{movieData.genres.map((genre) => genre.name).join(", ")}</td>
                        </tr>
                        <tr>
                            <th>{localization.tagline}</th>
                            <td>{movieData.tagline}</td>
                        </tr>
                        <tr>
                            <th>{localization.budget}</th>
                            <td>${movieData.budget}</td>
                        </tr>
                        <tr>
                            <th>{localization.revenue}</th>
                            <td>${movieData.revenue}</td>
                        </tr>
                        <tr>
                            <th>{localization.overview}</th>
                            <td>{movieData.overview}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classes.movieCard__averageRate}
                     style={{backgroundColor: `hsl(${movieData.vote_average*10}, 100%, 50%)`}}>
                    {movieData.vote_average.toFixed(1)}
                </div>
            </div>
        </div>
    );
});

export default MovieCard;
