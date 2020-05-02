import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '~/App';

import 'normalize.css';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';

const element = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, element);
