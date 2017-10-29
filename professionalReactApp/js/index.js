import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app';

let appElement = document.getElementById('app');

let appMarkup = (
    <App/>
);

ReactDOM.render(appMarkup, appElement);