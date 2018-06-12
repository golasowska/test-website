import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLink from './NavLink';
import logo from '../assets/pgs-logo.svg';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container d-block">
            <Link className="navbar-brand" to="/">
              <img src={logo} width="110" height="60" alt="pgs-logo" />
            </Link>

            <div className="navbar-nav">
              <NavLink to="/">
                ABOUT US <span className="sr-only">(current)</span>
              </NavLink>
              <NavLink to="/ski-cams">SKICAMS</NavLink>
              <NavLink to="/contact">CONTACT</NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
