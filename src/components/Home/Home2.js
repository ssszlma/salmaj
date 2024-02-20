import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={20} className="home-about-description">
            <h1 style={{ fontSize: "3em" }}>
              <span className="purple"> About </span>
            </h1>
            <p className="home-about-body">
              uwu
              <br />
              <br />
            </p>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
