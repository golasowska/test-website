import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCams } from '../actions';

import Navigation from './Navigation';
import CardSki from '../components/CardSki';
import Footer from '../components/Footer';

class SkiCams extends Component {
  componentDidMount = () => {
    this.props.getCams();
  };
  renderCardCams = () => {
    let balme = Object.assign({}, this.props.cams[26]);
    let piani = Object.assign({}, this.props.cams[216]);
    let balmeCams = Object.assign({}, balme.cams);
    let pianiCams = Object.assign({}, piani.cams);
    let balmeCam1 = Object.assign({}, balmeCams[111]);
    let balmeCam2 = Object.assign({}, balmeCams[112]);
    let pianiCam1 = Object.assign({}, pianiCams[604]);
    let pianiCam2 = Object.assign({}, pianiCams[605]);
    return (
      <div className="row row-ski-card">
        <CardSki src1={balmeCam1.url} src2={balmeCam2.url} title="Balme" />
        <CardSki
          src1={pianiCam1.url}
          src2={pianiCam2.url}
          title="Piani di Bobbio"
        />
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <Navigation />
          <div className="container">{this.renderCardCams()}</div>
          <div className="push" />
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cams: state.cams
  };
}

export default connect(mapStateToProps, { getCams })(SkiCams);
