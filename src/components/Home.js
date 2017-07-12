import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Jumbotron>
          <h1>MedSearch</h1>
          <p>Find similar medication instantly.</p>
          <p><Button href='/search' bsStyle="primary">Try now</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
