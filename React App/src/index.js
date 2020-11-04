import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux"
import App from './App'
import allReducers from "./reducers"
import { createStore } from 'redux'


// import store from "./local-storage/store"
// import { createStore } from "redux"
// import AllReducers from "./reducers"

const store = createStore(
  allReducers,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);