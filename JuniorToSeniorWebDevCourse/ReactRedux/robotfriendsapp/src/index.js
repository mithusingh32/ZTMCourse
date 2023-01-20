import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode is a tool for highlighting potential problems in an application.
  // Strict mode checks are run in development mode only; they do not impact the production build.
  // StrictMode currently helps with:
  //
  //     Identifying components with unsafe lifecycles
  //     Warning about legacy string ref API usage
  //     Warning about deprecated findDOMNode usage
  //     Detecting unexpected side effects
  //     Detecting legacy context API
  //     Ensuring reusable state
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
