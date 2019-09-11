import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import hist from "./helper/history";
import { isAuthenticated } from "./helper/authenticated";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import './index.css';
import App from './components/App';

import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./store/reducers";

const token = isAuthenticated().token;
axios.defaults.headers.common = {
  "x-auth-token": token
}

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);