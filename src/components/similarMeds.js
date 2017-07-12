import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import RxNormApi from '../api/rxNormApi';
import axios from 'axios';

import '../css/similarMeds.css';

class SimilarMeds extends Component {
  render() {
    let createSimilarMedsRows = <li>No similar medication found.</li>;
    if (this.props.meds) {
      console.log('LENGTH', this.props.meds.length)
      createSimilarMedsRows = this.props.meds.map((med, i) => {
        return (
          <li key={i}>{med.synonym}</li>
        );
      });
    }
    return (
      <Col xs={6} xsOffset={6}>
        <h4>Similar Medication:</h4>
        <ul className='medication-results'>
          { createSimilarMedsRows }
        </ul>
      </Col>
    )
  }
}

export default SimilarMeds;
