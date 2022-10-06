import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
//import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
      {/* <PersistGate loading={null} persistor={Persistor}>

      </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
