import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import tmdbLogo from "./assets/tmdb_logo.svg";
import MovieCardContainer from './components/MovieCard/MovieCardContainer';
import {Route, Switch } from 'react-router-dom';
import Test from "./components/test";

function App() {
    console.log("app render")

    return (
        <div className="App" >
            <Header/>
            <main>
                <Switch>
                   <Route path={"/title"} component={MovieCardContainer}/>
                   <Route path={"/calendar"} component={MovieCardContainer}/>
                </Switch>
            </main>
            <footer>
                <img src={tmdbLogo} className={"TMDB-logo"} alt="tmdbLogo"/>
            </footer>
            <Test/>
        </div>
    );
}

export default App;
