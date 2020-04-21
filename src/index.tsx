import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import UnstatedNext from './unstated-next';
import ConstateStateManage from './constate';

ReactDOM.render(
  <React.StrictMode>
    <UnstatedNext />
    <ConstateStateManage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
