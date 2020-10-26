import React from 'react';
import { Link } from 'react-router-dom';

function FactionChoice() {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h5 className="user-select-none">Wähle eine Fraktion aus</h5>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="list-group">
                        <Link to="/new/AMA" className="list-group-item list-group-item-action">Amazonen</Link>
                        <Link to="/new/ASS" className="list-group-item list-group-item-action">Bruderschaft</Link>
                        <Link to="/new/DEB" className="list-group-item list-group-item-action">Debonn</Link>
                        <Link to="/new/GOB" className="list-group-item list-group-item-action">Goblin Piraten</Link>
                        <Link to="/new/IMP" className="list-group-item list-group-item-action">Imperiale Armada</Link>
                        <Link to="/new/MYS" className="list-group-item list-group-item-action">Kult</Link>
                        <Link to="/new/PIR" className="list-group-item list-group-item-action">Piraten</Link>
                        <Link to="/new/SOL" className="list-group-item list-group-item-action">Söldner</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FactionChoice;