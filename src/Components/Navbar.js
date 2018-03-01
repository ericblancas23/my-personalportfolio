import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aboutme from '../routes/about-me';


  

export const NavBar = () => (
    <div>
      
        <Navbar className="Navbar-style">
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
    <NavItem>
        <Link to="/contact">Contact</Link>
    </NavItem>
    <img src="https://www.bnmetrics.com/images/bunny-icon.png" style={{width: 40, height: 40, float:"right", paddingTop: "0.5cm"}}/>
  </Nav>
</Navbar>
    </div>
)