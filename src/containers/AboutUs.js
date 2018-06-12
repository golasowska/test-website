import React, { Component } from 'react';

import Navigation from './Navigation';
import CardItem from '../components/CardItem';
import Footer from '../components/Footer';

import image1 from '../assets/image_1.png';
import image2 from '../assets/image_2.png';
import image3 from '../assets/image_3.png';

export default class AboutUs extends Component {
  renderCards = () => {
    return (
      <div className="row row-card align-items-center">
        <CardItem src={image1} />
        <CardItem src={image2} />
        <CardItem src={image3} />
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <Navigation />
          <div className="container">{this.renderCards()}</div>
          <div className="push" />
        </div>
        <Footer />
      </div>
    );
  }
}
