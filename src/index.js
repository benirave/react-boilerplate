import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GetRoutes } from './routes';

ReactDOM.render(
  <Provider store={store}>
    <div>
      {GetRoutes()}
    </div>
  </Provider>, 
  document.getElementById('root')
);