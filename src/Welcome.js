import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div>
        <div>
          Wilkommen bei Tortuga, einer Listenverwaltung für Freebooter's Fate!
        </div>

        <div>
          Was möchtest du machen?
        </div>

        <Link to="/new">Neue Liste anlegen</Link>
        <Link to="/lists">Meine Listen verwalten</Link>
      </div>
    );
  }
}

export default Welcome;