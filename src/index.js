import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Bootstrap stuff
// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'

ReactDOM.render(<App />, document.getElementById('root'));
