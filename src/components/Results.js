import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import RxNormApi from '../api/rxNormApi';

import '../css/Results.css';

class Results extends Component {
  onSelect(event) {
    event.preventDefault();
    let url = event.target.attributes.href.value;
    let medicine = RxNormApi.getRelated(url);
    console.log(medicine);
    medicine.then((data) => {
        console.log("this is frontend", data);
    });
  }

  render() {
    let createResultRows = <li>No results found.</li>;
    if (this.props.results) {
      createResultRows = this.props.results.map((med) => {
        return (
          <li key={med.id}>
            <a href={med.url} onClick={this.onSelect}>{med.name}</a>
          </li>
        );
      });
    }
    return(
      <Row>
        <Col sm={8} smOffset={2}>
          <ul className="search-results">
            { createResultRows }
          </ul>
        </Col>
      </Row>
    );
  }
}

export default Results;
