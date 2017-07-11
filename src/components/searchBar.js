import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Grid, Row, Col } from 'react-bootstrap';
import '../css/searchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <Grid>
        <form className="search-bar-form">
          <FormGroup bsSize="large">
            <Row>
              <Col sm={6} smOffset={2}>
                <FormControl className="search-bar"
                             type="text"
                             value={this.props.inputField}
                             onChange={this.props.onChange}
                             placeholder="Search by medicine name" />
              </Col>
              <Col sm={2} smOffset={8}>
                <Button type="submit" onClick={this.props.onSearch}>Search</Button>
              </Col>
            </Row>
          </FormGroup>
        </form>
      </Grid>
    );
  }
}

export default SearchBar;
