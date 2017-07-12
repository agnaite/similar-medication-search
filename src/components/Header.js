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
              <NavItem href="/search">Find Meds</NavItem>
              <NavItem href="/about">About</NavItem>
            </Nav>
        </Navbar.Collapse>
        </Grid>
      </Navbar>
    );
  }
}

export default Header;
