import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import $ from 'jquery'

import {BrowserRouter} from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'

import {store,persistor} from './redux/store'

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
  <PersistGate persistor={persistor}>

  <App />
  </PersistGate>

</BrowserRouter>
</Provider>

, document.getElementById('root'));


serviceWorker.unregister();
