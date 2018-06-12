import React, { Component } from 'react';

import Navigation from './Navigation';
import FormContact from './FormContact';
import Footer from '../components/Footer';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Navigation />
          <div className="container">
            <div className="row row-card justify-content-center align-items-center">
              <FormContact history={this.props.history} />
            </div>
          </div>
          <div className="push" />
        </div>
        <Footer />
      </div>
    );
  }
}
