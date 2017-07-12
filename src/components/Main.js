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
      let rxcui = response.data.relatedGroup.conceptGroup[0].conceptProperties[0].rxcui;
      let url_two = 'https://rxnav.nlm.nih.gov/REST/rxcui/'+rxcui+'/related.json?tty=SCD+SBD'
      axios.get(url_two)
      .then(response => {
        this.setState({
          similarMeds: response.data.relatedGroup.conceptGroup[0].conceptProperties
        });
      });
    })

    console.log('iim hereee', this.state);
  }
  render() {
    return (
      <Grid>
        <Row>
          <SearchBar inputField={this.state.value}
                     onChange={this.handleChange}
                     onSearch={this.handleSubmit} />
        </Row>
        <Row>
          <Results results={this.state.results}
                   onFind={this.handleFind} />
          <SimilarMeds meds={this.state.similarMeds} />
        </Row>
      </Grid>
    );
  }
}

export default Main;
