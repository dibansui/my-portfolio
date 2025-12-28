import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import pdfImg from "../../Assets/Projects/pdf.png"; 
import snakeImg from "../../Assets/Projects/snake.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* --- PDF TO SPEECH PROJECT --- */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="https://github.com/soumyajit4419/Portfolio/blob/master/src/Assets/Projects/blog.png?raw=true"
              
              isBlog={false}
              title="PDF-to-Speech Converter"
              description="Developed a Python script using PyPDF2 and gTTS to extract text from PDF files and convert it into speech (saved as .mp3). Designed to enhance accessibility by providing audio reading of written documents."
              ghLink="https://github.com/dibansui/pdf-to-speech.git"
            />
          </Col>

          {/* --- PROJECT 2: PYGAME ADVANCED SNAKE --- */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="https://github.com/soumyajit4419/Portfolio/blob/master/src/Assets/Projects/codeEditor.png?raw=true" // Replace with {snakeImg} later
              isBlog={false}
              title="Pygame Advanced Snake"
              description="A classic Snake game built with Python and the Pygame library. Features smooth controls, score tracking, and collision detection logic, demonstrating core game development concepts and object-oriented programming in Python."
              ghLink="https://github.com/dibansui/pygame-advanced-snake.git"
            />
          </Col>

          {/* You can add more <Col> components here for other projects */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;