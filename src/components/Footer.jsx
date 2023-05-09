import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-info text-secondary p-3 ">
      <Row>
        <Col md={6} className="text-center my-2 text-md-start">
          <p>&copy; 2023 All rights reserved.</p>
        </Col>
        <Col md={6} className="text-center my-2 text-md-end">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="/about">About</a>
            </li>
            <li className="list-inline-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
