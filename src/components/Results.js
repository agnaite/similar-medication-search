import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Results extends Component {
  render() {
    return(
      <Row>
        <Col sm={8} smOffset={2}>
          <ul>
            <li>
              {this.props.results}
            </li>
          </ul>
        </Col>
      </Row>
    );
  }
}

export default Results;
