import React from "react";
import ReactDOM from "react-dom";
import App from "./layouts/App";
import * as firebase from "firebase";
import store from "./Store";
import { Provider } from "react-redux";
import { fbConfig } from "./Config";

firebase.initializeApp(fbConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
