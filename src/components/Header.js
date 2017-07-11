import React, { Component } from 'react';
import { Navbar, Grid } from 'react-bootstrap';

import logo from '../images/drugs.png';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <img className="navbar-logo" src={logo} alt="medicine-icon" />
              <a href="/">SearchMed</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
    );
  }
}

export default Header;
