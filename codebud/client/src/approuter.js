// approuter for navbar
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import SimpleMap from './components/Map/Map'

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Nav/>
                <Route exact path='/' component={Home} />
                <Route path='/map' component={SimpleMap} />
            </div>
        </Router>
    )
};

export default AppRouter;