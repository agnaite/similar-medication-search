import React, { Component } from 'react';
import { Navbar, Grid, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'

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
              <Link className="navbar-brand" to="/">MedSearch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}><Link to="/search">Find Meds</Link></NavItem>
              <NavItem eventKey={2}><Link to="/about">About</Link></NavItem>
            </Nav>
        </Navbar.Collapse>
        </Grid>
      </Navbar>
    );
  }
}

export default Header;
