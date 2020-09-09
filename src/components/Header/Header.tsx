import React from 'react';
import classes from "./Header.module.css";
import tmdbLogo from "../../assets/tmdb_logo.svg";
import Search from "./Search/Search";

const Header = () => {


    return (
        <div className={classes.header}>
            <img src={tmdbLogo} alt=""/>
            <Search/>
        </div>
    );
};

export default Header;
