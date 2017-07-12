import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Col } from 'react-bootstrap';
import '../css/searchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Col sm={6}>
          <form className="search-bar-form">
            <FormGroup bsSize="large">
                <Col sm={8}>
                  <FormControl className="search-bar"
                               type="text"
                               value={this.props.inputField}
                               onChange={this.props.onChange}
                               placeholder="Search by medicine name" />
                </Col>
                <Col smOffset={4}>
                  <Button type="submit" className="submit-btn" onClick={this.props.onSearch}>Search</Button>
                </Col>
            </FormGroup>
          </form>
        </Col>
        <h4>Similar Medication:</h4>
      </div>
    );
  }
}

export default SearchBar;
