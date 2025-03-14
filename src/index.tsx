import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import './main.css';
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.Suspense fallback="loading">
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>
);
