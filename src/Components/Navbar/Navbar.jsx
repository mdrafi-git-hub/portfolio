import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../../logo.png';

const CustomNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" collapseOnSelect>
      <Container>
       <Navbar.Brand as={Link} to="/home">
  <img
    src={logo}
    alt="Logo"
    height="40"
    style={{ borderRadius: '20px' }}
    className="d-inline-block align-top"
  />
</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/experince">Experience</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;



