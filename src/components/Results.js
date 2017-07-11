import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Results extends Component {
  render() {
    let createResultRows = '';
    if (this.props.results) {
      createResultRows = this.props.results.map(function(med) {
        return (
          <li key={med.id}>
            <a href={med.url}>{med.name}</a>
          </li>
        );
      });
    }
    return(
      <Row>
        <Col sm={8} smOffset={2}>
          <ul>
            {createResultRows}
          </ul>
        </Col>
      </Row>
    );
  }
}

export default Results;
