import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on in the past
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>

          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="SkinCheck"
              description="Skin detection app powered by AI. (Summer 2023 hackathon submission) Supports common skin conditions and recognizes various skin colours and types"
              ghLink="https://github.com/salmly/skincheck"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
                isBlog={false}
                title="TTT"
                description="Crypto TicTacToe betting game (Summer 2023 hackathon finalist submission)"
                ghLink="https://github.com/salmly/TTT_Betting"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
                isBlog={false}
                title="GeoGrapher"
                description="A geometric figure visualiser using graph coordinates for competitive programming problems."
                ghLink="https://github.com/salmly/geographer"

            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
                isBlog={false}
                title="To IPA: The API"
                description="An API for converting text to International Phonetic Alphabet (IPA) symbols. Currently in development"
                ghLink="https://github.com/salmly/toipa-theapi"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
                isBlog={false}
                title="BDL Card Manager"
                description="A debate brief/card manager for competitive debaters. Currently in development"
                ghLink="https://github.com/salmly/BDL_Brief_Manager"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
                isBlog={false}
                title="Jas"
                description="An old discord.py starter template"
                ghLink="https://github.com/salmly/Jas."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
                isBlog={false}
                title="Trivium"
                description="Basic trivia game made with python for a CS course project."
                ghLink="https://github.com/salmly/mites-python-project"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
                isBlog={false}
                title="Comp programming"
                description="A collection of some of my (weak) competitive programming solves."
                ghLink="https://github.com/salmly/competitive-programming"
                cflink="https://github.com"
                lclink="https://leetcode.com/salmly/"
            />

          </Col>

          <Col md={20} className="project-card">
            <ProjectCard
                isBlog={false}
                title="More"
                description="More projects available on my GitHub."
                ghLink="https://github.com/salmly"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
