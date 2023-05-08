import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Typist from "react-typist-component";
import { Jumbotron } from "./migration";
import ContactPage from "./Contact";

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
        <section id="work" className="py-5">
          <h2 className="text-center mb-5">My Works</h2>

          <Row>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzaWduZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                />

                <Card.Body>
                  <Card.Title>Project Title</Card.Title>

                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed tellus urna. Nunc tincidunt nisl id mauris
                    consectetur, at iaculis tellus fermentum.
                  </Card.Text>

                  <Button variant="info">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzaWduZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                />

                <Card.Body>
                  <Card.Title>Project Title</Card.Title>

                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed tellus urna. Nunc tincidunt nisl id mauris
                    consectetur, at iaculis tellus fermentum.
                  </Card.Text>

                  <Button variant="info">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzaWduZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                />

                <Card.Body>
                  <Card.Title>Project Title</Card.Title>

                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed tellus urna. Nunc tincidunt nisl id mauris
                    consectetur, at iaculis tellus fermentum.
                  </Card.Text>

                  <Button variant="info">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <ContactPage container={true} />
      </>
    );
  }
);

export default MainBody;
