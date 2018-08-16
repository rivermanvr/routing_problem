import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const element = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
