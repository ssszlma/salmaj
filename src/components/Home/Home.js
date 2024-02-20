import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={10} className="home-header">


              <h1 className="heading-name">
                <strong className="main-name"> Salma J. </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
      /* <Home2 /> */
    </section>
  );
}

export default Home;
