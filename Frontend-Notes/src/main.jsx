import React from "react";
import ReactDOM from "react-dom/client";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Headers/>
    <Button/>
    <RandomImage/>
    <List/> */}
    {/* <Count/> */}
    {/* <Counters/> */}
    {/* <Navbar/> */}
    {/* <Movies/> */}
    {/* <Home /> */}
  </React.StrictMode>
);
