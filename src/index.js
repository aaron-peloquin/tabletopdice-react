import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TabletopDice from './TabletopDice';
import * as serviceWorker from './serviceWorker';

/**
 * Render the TabletopDice app in our HTML root.
 */
ReactDOM.render(<TabletopDice />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
