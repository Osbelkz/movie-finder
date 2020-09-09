import React from 'react';
import classes from "./Header.module.css";
import tmdbLogo from "../../assets/tmdb_logo.svg";

const Header = () => {


    return (
        <div className={classes.header}>
            <img src={tmdbLogo} alt=""/>
        </div>
    );
};

export default Header;
