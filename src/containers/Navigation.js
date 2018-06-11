import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pgs-logo.svg';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container d-block">
            <Link className="navbar-brand" to="/">
              <img src={logo} width="110" height="60" alt="pgs-logo" />
            </Link>

            <div className="navbar-nav">
              <Link className="nav-item nav-link active pl-0" to="/">
                ABOUT US <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link" to="/ski-cams">
                SKICAMS
              </Link>
              <Link className="nav-item nav-link" to="/contact">
                CONTACT
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
