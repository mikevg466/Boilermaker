import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './react/store.js';

ReactDOM.render(
  <Provider store={store}>
    {/* rest of your app goes here! */}
  </Provider>,
  document.getElementById('yourApp')
);
