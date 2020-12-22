import React from 'react';
import classes from "./Header.module.css";
import {useDispatch} from "react-redux";
import {changeAppLanguageAC} from "../../redux/actions/app-actions";
import {AppLanguageType} from "../../redux/app-reducer";
import SearchContainer from './Search/SearchContainer';
import { NavLink } from 'react-router-dom';

const Header = React.memo(() => {
    console.log("header render")
    const dispatch = useDispatch()

    const changeLanguageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(changeAppLanguageAC(e.currentTarget.dataset.lang as AppLanguageType))
    }

    return (
        <header className={classes.header}>
            <nav>
                <NavLink to={"/calendar"} title={"Calendar"} />
            </nav>
            <SearchContainer/>

            <div>
                <button className={classes.lang_button} data-lang={"ru-RU"} onClick={changeLanguageHandler}>RU</button>
                <button className={classes.lang_button} data-lang={"en-EN"} onClick={changeLanguageHandler}>EN</button>
            </div>
        </header>
    );
})

export default Header;
