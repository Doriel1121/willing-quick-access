import React, { Component } from "react";
import "../Navbar.css";
// import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbarStyle">
          <div style={{ marginRight: 0 }} className="row">
            <div className="col-1">
              <img className="logo" src="./willing_logo.png" />
            </div>
            <div className="col-8"></div>
            <div className="col-sm"></div>
            <div className="col-sm"></div>
          </div>
          <div style={{ marginRight: 0 }} id="buttons" className="row">
            <div className="col-1"></div>
            <div className="col-sm">
              {/* <Link className="linkstyle" path to="/dashboard"> */}
              <button className="buttonStyle">New Post</button>
              {/* </Link> */}
            </div>
            <div className="col-8"></div>
          </div>
        </nav>
      </div>
    );
  }
}
