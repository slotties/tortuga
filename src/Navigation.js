import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-brand user-select-none">Freebooter's Fate</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNavigation" aria-controls="headerNavigation" aria-expanded="false" aria-label="Navigation ein-/ausblenden">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="headerNavigation">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/new" className="nav-link user-select-none">Neue Liste anlegen</Link>
              </li>
              <li className="nav-item">
                <Link to="/lists" className="nav-link user-select-none">Listen verwalten</Link>
              </li>
            </ul>
        </div>
          
        </div>
        
      </div>
    );
  }
}

export default Navigation;