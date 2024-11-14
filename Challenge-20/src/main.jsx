import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./utils/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </Provider>
);
