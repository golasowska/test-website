import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import AboutUs from '../containers/AboutUs';
import Contact from '../containers/Contact';
import SkiCams from '../containers/SkiCams';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route component={ScrollToTop} />
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/ski-cams" component={SkiCams} />
            <Route exact path="/" component={AboutUs} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
