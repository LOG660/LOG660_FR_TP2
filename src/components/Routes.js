import App from "../App";
import MovieDetails from "./MovieDetails";
import {Router, Route} from 'react-router';
import { createBrowserHistory } from 'history'
import React from 'react';
import ActeurDetails from "./ActeurDetails";

export default (
    <Router history={createBrowserHistory()}>
        <Route exact path='/' component={App} />
        <Route exact path='/movieDetails/:id' component={MovieDetails} />
        <Route exact path='/acteur/:id' component={ActeurDetails} />
    </Router>
)