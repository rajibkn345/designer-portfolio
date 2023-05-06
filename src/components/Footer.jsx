import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-info py-3">
      <Container>
        <Row>
          <Col>
            <p className="text-muted text-center mb-0">&copy;Copyright 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
