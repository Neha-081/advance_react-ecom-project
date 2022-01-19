import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//provider is component class which passes tore and gives context to whole application 
import {Provider} from 'react-redux';
import {persistGate} from 'redux-persist/integration/react'
import {store,persistor} from './redux/store'

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <persistGate persistor={persistor}>
  <App />
  </persistGate>

  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);