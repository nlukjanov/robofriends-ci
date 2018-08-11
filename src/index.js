import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hello from './Hello';
import './index.css';
import 'tachyons';

ReactDOM.render(
  <Hello greeting={'React' + ' Ninja'} />,
  document.getElementById('root')
);
