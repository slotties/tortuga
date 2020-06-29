import React, { Component } from 'react';
import Navigation from './Navigation';
import Welcome from './Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NewList from './NewList';
import ManageLists from './ManageLists';
import FactionChoice from './FactionChoice';

function App() {
  return (
    <Router basename="/tortuga/build">
      <div className="container">
        <Navigation />

        <Switch>
          <Route path="/factionChoice">
            <FactionChoice />
          </Route>
          <Route path="/new/:faction">
            <NewList />
          </Route>
          <Route path="/lists">
            <ManageLists />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;