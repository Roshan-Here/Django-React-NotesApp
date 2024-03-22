import React from "react";
import ReactDOM from "react-dom/client";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.jsx";
import Headers from "./components/Headers.jsx";
import "./index.css";
import Button from "./components/Button.jsx";
import Count from "./components/Count.jsx";
import RandomImage from "./components/RandomImage.jsx";
import List from "./components/List.jsx";
import Movies from "./components/Movies.jsx";
import Counters from "./components/Counters.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
