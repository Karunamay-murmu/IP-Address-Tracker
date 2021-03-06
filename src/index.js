import React from 'react';
import ReactDOM from 'react-dom';

import 'leaflet/dist/leaflet.css';

import App from './App';

import "../src/static/stylesheets/css/index.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

