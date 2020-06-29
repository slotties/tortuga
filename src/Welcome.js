import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <div className="row">
        <div className="col">
          Wilkommen bei Tortuga, einer Listenverwaltung für Freebooter's Fate!
                </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="list-group">
            <Link to="/factionChoice" className="list-group-item list-group-item-action">Neue Liste anlegen</Link>
            <Link to="/lists" className="list-group-item list-group-item-action">Meine Listen verwalten</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;