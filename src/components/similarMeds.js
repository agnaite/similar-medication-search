import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import RxNormApi from '../api/rxNormApi';
import axios from 'axios';

import '../css/Results.css';

class SimilarMeds extends Component {
  render() {
    let createSimilarMedsRows = <li>No similar medication found.</li>;
    if (this.props.meds) {
      createSimilarMedsRows = this.props.meds.map((med) => {
        return (
          <li>{med.name}</li>
          // <li key={med.id}>
          //   <a href={med.url} onClick={this.props.onFind}>{med.name}</a>
          // </li>
        );
      });
    }
    return (
      <Col xs={6} xsOffset={6}>
        <h4>Similar Medication:</h4>
        { createSimilarMedsRows }
      </Col>
    )
  }
}

export default SimilarMeds;
