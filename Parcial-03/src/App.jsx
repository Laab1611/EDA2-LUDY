import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoApp, MultipleCustomHooks, NavBar,HomePage } from "./components/index";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./index.css";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/hooks" element={<MultipleCustomHooks />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;