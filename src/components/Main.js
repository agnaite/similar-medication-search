import RxNormApi from '../api/rxNormApi';
import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import SearchBar from './searchBar';
import Results from './Results';
import SimilarMeds from './similarMeds';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', results: [''], similarMeds: ['']};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFind = this.handleFind.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    let medicine = RxNormApi.getMedicine(this.state.value);
    medicine.then(data => {
        this.setState({
            results: data
        });
    });
  }

  handleFind(event) {
    event.preventDefault();
    let url = event.target.attributes.href.value;

    axios.get(url)
    .then(response => {
      console.log('about to set state');
      this.setState({
        similarMeds: response.data.relatedGroup.conceptGroup[0].conceptProperties
      });
    });

    console.log('iim hereee', this.state);
  }

  render() {
    return (
      <Grid>
        <Row>
          <SearchBar inputField={this.state.value}
                     onChange={this.handleChange}
                     onSearch={this.handleSubmit} />
          <SimilarMeds meds={this.state.similarMeds} />
        </Row>
        <Row>
          <Results results={this.state.results}
                   onFind={this.handleFind} />
        </Row>
      </Grid>
    );
  }
}

export default Main;
