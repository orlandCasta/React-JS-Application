// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.css";
import "../src/global.css";

const container = document.getElementById('app');

// ReactDOM.render(__qué queremos renderizar__, __dónde queremos renderizar__);
ReactDOM.render(<App/>, container);
