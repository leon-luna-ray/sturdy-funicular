import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import '../style.css';

const NavBar = (props) => {
  return (
    <>
      <Navbar className='nav-top' expand='lg'>
        <Navbar.Brand href='#home'>Ray Luna</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>About</Nav.Link>
            <Nav.Link href='/projects'>Projects</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

// Need ot add links to download resume 