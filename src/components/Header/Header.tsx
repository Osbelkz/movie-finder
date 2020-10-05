import React from 'react';
import classes from "./Header.module.css";
import tmdbLogo from "../../assets/tmdb_logo.svg";
import Search from "./Search/Search";
import {useDispatch} from "react-redux";
import {changeAppLanguageAC} from "../../redux/app-actions";
import {AppLanguageType} from "../../redux/app-reducer";

const Header = () => {

    const dispatch = useDispatch()

    const changeLanguageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(changeAppLanguageAC(e.currentTarget.dataset.lang as AppLanguageType))
    }

    return (
        <div className={classes.header}>
            <img src={tmdbLogo} alt="tmdbLogo"/>
            <Search/>
            <div>
                <button data-lang={"ru-RU"} onClick={changeLanguageHandler}>RU</button>
                <button data-lang={"en-EN"} onClick={changeLanguageHandler}>EN</button>
            </div>
        </div>
    );
};

export default Header;
