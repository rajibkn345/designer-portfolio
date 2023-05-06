import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      className="d-lg-flex px-4 justify-content-between"
      sticky="top"
      bg="info"
      expand="lg"
    >
      <Navbar.Brand className="navLogo" href="/">
        {"<Raj/>"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link className="navText" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="navText" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="navText" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
