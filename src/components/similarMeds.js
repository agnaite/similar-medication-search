import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import '../css/similarMeds.css';

class SimilarMeds extends Component {
  render() {
    let createSimilarMedsRows = <li>No similar medication found.</li>;

    if (this.props.meds) {
      createSimilarMedsRows = this.props.meds.map((med, i) => {
        return (
          <li key={i}>{med.synonym}</li>
        );
      });
    }

    return (
      <Col xs={6}>
        <ul className='medication-results'>
          { createSimilarMedsRows }
        </ul>
      </Col>
    )
  }
}

export default SimilarMeds;
