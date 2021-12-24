import React from 'react';
import ReactDOM from 'react-dom';
import "./base.css"
import App from './App';
import reduxStore from "./store/store";
import {Provider as Redux} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Redux store={reduxStore}>
            <Router>
                <App/>
            </Router>
        </Redux>
    </React.StrictMode>,
    document.getElementById('root')
);

