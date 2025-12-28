import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
} from "react-icons/di";
import { SiMysql, SiCss3 } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      {/* Javascript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* HTML */}
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      {/* CSS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      {/* SQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;