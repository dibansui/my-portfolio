import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGithub,
  SiGoogleanalytics,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; // ✅ Use this reliable icon
import { DiWindows } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode /> {/* ✅ Updated Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics />
      </Col>
    </Row>
  );
}

export default Toolstack;