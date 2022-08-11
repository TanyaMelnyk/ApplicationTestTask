import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./reduxStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function mountApp() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
}
mountApp();
