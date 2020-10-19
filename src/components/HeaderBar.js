import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import contents from '../contents';
import {Link} from 'react-scroll';

export default function HeaderBar(props) {
  return (
    <Navbar className="red1150" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Andrew Torr</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000}>Home</Link>
          {Object.keys(contents).map(key =>
            <Link to={key} spy={true} smooth={true} duration={1000}>
              {contents[key].shortTitle}
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
