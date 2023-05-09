import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Typist from "react-typist-component";
import { Jumbotron } from "./migration";
import project1 from "../assets/1.jpg";
import project2 from "../assets/2.jpg";
import project3 from "../assets/3.jpg";
import project4 from "../assets/4.jpg";
import project5 from "../assets/5.jpg";
import project6 from "../assets/6.jpg";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <>
        <Jumbotron
          fluid
          id="home"
          style={{
            background: `linear-gradient(136deg,${gradient})`,
            backgroundSize: "1200% 1200%",
          }}
          className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        >
          <div id="stars"></div>
          <Container className="text-center">
            <h1 ref={ref} className="display-1">
              {title}
            </h1>
            <Typist>
              <div className="lead typist">{message}</div>
            </Typist>
            <div className="p-5">
              {icons.map((icon, index) => (
                <a
                  key={`social-icon-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                >
                  <i className={`fab ${icon.image} fa-3x socialicons`} />
                </a>
              ))}
            </div>
          </Container>
        </Jumbotron>
        <section id="work" className="py-5 px-4">
          <h2 className="text-center mb-5">My Works</h2>

          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={project1} />
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={project2} />
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={project3} />
              </Card>
            </Col>
          </Row>
          <Row className="my-3">
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={project4} />
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={project5} />
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={project6} />
              </Card>
            </Col>
          </Row>
        </section>
      </>
    );
  }
);

export default MainBody;
