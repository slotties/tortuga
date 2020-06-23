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

class App extends Component {
  render() {
    return (
      <Router basename="/tortuga/build">
        <div className="container">
          <Navigation/>

          <Switch>
            <Route path="/new">
              <NewList/>
            </Route>
            <Route path="/lists">
              <ManageLists/>
            </Route>
            <Route path="/">
              <Welcome/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;