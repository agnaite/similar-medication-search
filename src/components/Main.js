import RxNormApi from '../api/rxNormApi';
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import SearchBar from './searchBar';
import Results from './Results';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', result: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, result: ''});
    console.log(this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    let medicine = RxNormApi.getMedicine(this.state.value);
    this.setState({value: '', result: medicine});
    console.log(this.state);
  }

  render() {
    return (
      <Grid>
        <SearchBar inputField={this.state.value} onChange={this.handleChange} onSearch={this.handleSubmit} />
        <Results results={this.state.result} />
      </Grid>
    );
  }
}

export default Main;
