import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
// Removed the image import to keep it clean

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        {/* Professional Centered Layout */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10} // Increased width since we removed the image
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* Centered Title */}
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
              About <strong className="purple">Me</strong>
            </h1>
            
            {/* Card contains your bio */}
            <AboutCard />
          </Col>
        </Row>
        
        {/* Skills Section */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        {/* Tools Section */}
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;