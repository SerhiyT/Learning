import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Hey(props) {
    return <h1>Hey, {props.name}</h1>;
}

const elem = <Hey name="Serh" />;
ReactDOM.render(
    elem,
    document.getElementById('root')

);


