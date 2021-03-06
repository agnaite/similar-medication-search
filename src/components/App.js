import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import About from './About';
import Home from './Home';
import { Route } from 'react-router';
import { Grid } from 'react-bootstrap';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid fluid>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/search' component={Main} />
        </Grid>
      </div>
    );
  }
}

export default App;
