import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import ArtistInfo from './pages/ArtistInfo';

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route path='/' exact component={Landing}/>
            <Route path='/artistInfo' component={ArtistInfo}/>
        </Switch>
    </Router>
  );
}