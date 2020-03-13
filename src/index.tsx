import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { createStore, Store, applyMiddleware } from "redux";

import { RootState, PokemonActionTypes } from "./types/redux";
import * as serviceWorker from "./serviceWorker";
import reducers from "./redux/reducers";
import "./index.css";
import App from "./App";

const store: Store<RootState, PokemonActionTypes> = createStore(
  reducers,
  applyMiddleware(thunk)
);

const app: JSX.Element = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
