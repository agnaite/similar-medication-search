import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import '../css/Results.css';

class Results extends Component {
  render() {
    let createResultRows = <li>No results found.</li>;

    if (this.props.results) {
      createResultRows = this.props.results.map((med, i) => {
        return (
          <li key={i}>
            <a href={med.url} onClick={this.props.onFind}>{med.name}</a>
          </li>
        );
      });
    }
    
    return(
      <Col xs={6}>
        <ul className="search-results">
          { createResultRows }
        </ul>
      </Col>
    );
  }
}

export default Results;
