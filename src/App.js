import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import bolter from './img/bolter-white.png'
import Home from "./components/Home"
import Credits from "./components/Credits"
import Downloads from "./components/Downloads"
import Contact from "./components/Contact"

import './App.css'

const AppRouter = () => (
  <Router>
    <div className="container">
      <div className="body-fade"></div>
      <div id="site">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/"><img src={bolter} alt="Bolter"></img></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/credits" className="nav-link">Credits</Link>
              </li>
              <li className="nav-item">
                <Link to="/downloads" className="nav-link">Downloads</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div id="content">
          <Route path="/" exact component={Home} />
          <Route path="/credits" component={Credits} />
          <Route path="/downloads" component={Downloads} />
          <Route path="/contact" component={Contact} />
        </div>
        <div id="footer">
        </div>
      </div>
    </div>
  </Router>
);

export default AppRouter;