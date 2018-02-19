import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aboutme from '../routes/about-me';

export const NavBar = () => (
    <div>
        <Navbar>
  {/* <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header> */}
  <Nav>
    <NavItem eventKey={1} href="#">
      <Link to="/">Home</Link>
    </NavItem>
    <NavItem>
        <Link to="/about-me">About Me</Link>
    </NavItem>
    <NavItem eventKey={2} href="#">
      <Link to="/Projects">Projects</Link>
    </NavItem>
  </Nav>
</Navbar>
    </div>
)