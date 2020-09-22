import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Post />
    </div>
  );
}

export default App;
