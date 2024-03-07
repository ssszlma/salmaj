import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {"\n"}
        {"\n"}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.cflink && (
          <Button
            variant="primary"
            href={props.cflink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {"CodeForces"}
          </Button>
        )}
        {!props.isBlog && props.lclink && (
            <Button
                variant="primary"
                href={props.lclink}
                target="_blank"
                style={{ marginLeft: "10px" }}
            >
              {"Leetcode"}
            </Button>
        )}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
