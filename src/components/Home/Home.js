import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import { ImPointRight } from "react-icons/im";
import { FaLaptopCode, FaBrain, FaSearch, FaRobot, FaDatabase } from "react-icons/fa";
import { FaCertificate, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      {/* --- HERO SECTION --- */}
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                I'm <strong className="main-name"> DEVANSHU YADAV</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }} />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* --- WHAT I DO SECTION --- */}
      <Container fluid className="home-about-section" style={{ backgroundColor: "#1b1a2ea9" }}>
        <Container>
          <Row>
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                WHAT <span className="purple"> I DO </span>
              </h1>
              <p className="home-about-body">
                I specialize in building robust applications and leveraging data-driven solutions.
              </p>
            </Col>
          </Row>
          
          <Row style={{ justifyContent: "center", paddingBottom: "50px", marginTop: "30px" }}>
            
            {/* Card 1: Web Dev */}
            <Col md={4} className="service-card" style={{ padding: "20px", textAlign: "center", color: "white" }}>
              <FaLaptopCode style={{ fontSize: "3em", color: "#cd5ff8" }} />
              <h3 style={{ margin: "15px 0" }}>Full Stack Dev</h3>
              <p>Building responsive websites using React.js, Node.js, and modern CSS frameworks.</p>
            </Col>

            {/* Card 2: AI/ML */}
            <Col md={4} className="service-card" style={{ padding: "20px", textAlign: "center", color: "white" }}>
              <FaBrain style={{ fontSize: "3em", color: "#cd5ff8" }} />
              <h3 style={{ margin: "15px 0" }}>Deep Learning</h3>
              <p>Developing intelligent models for Deepfake detection and computer vision tasks.</p>
            </Col>

             {/* Card 3: Data Science */}
             <Col md={4} className="service-card" style={{ padding: "20px", textAlign: "center", color: "white" }}>
              <FaDatabase style={{ fontSize: "3em", color: "#cd5ff8" }} />
              <h3 style={{ margin: "15px 0" }}>Data Science</h3>
              <p>Analyzing extracted data patterns and building predictive models using Python.</p>
            </Col>

            {/* Card 4: SEO Principles */}
            <Col md={4} className="service-card" style={{ padding: "20px", textAlign: "center", color: "white" }}>
              <FaSearch style={{ fontSize: "3em", color: "#cd5ff8" }} />
              <h3 style={{ margin: "15px 0" }}>SEO Specialist</h3>
              <p>Optimizing content visibility and search rankings using Google Analytics & Search Console.</p>
            </Col>

            {/* Card 5: Prompt Engineering */}
            <Col md={4} className="service-card" style={{ padding: "20px", textAlign: "center", color: "white" }}>
              <FaRobot style={{ fontSize: "3em", color: "#cd5ff8" }} />
              <h3 style={{ margin: "15px 0" }}>Prompt Engineering</h3>
              <p>Crafting precise prompts for LLMs to generate efficient code and creative solutions.</p>
            </Col>

          </Row>
        </Container>
      </Container>

      {/* --- SECTION: CERTIFICATIONS --- */}
      <Container fluid className="home-about-section" style={{ backgroundColor: "#1b1a2ea9" }}>
        <Container>
          <Row>
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                MY <span className="purple"> ACHIEVEMENTS </span>
              </h1>
              <p className="home-about-body">
                Continuous learning is key. Here are my recent certifications.
              </p>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", marginTop: "30px", gap: "20px" }}>


            <Col md={3} className="service-card" style={{ padding: "30px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "15px" }}>
              <FaCertificate style={{ fontSize: "3em", color: "#cd5ff8" }} />
              
              {/* 👇 REPLACE THIS TEXT WITH YOUR EXACT CERTIFICATE NAME */}
              <h4 style={{ marginTop: "15px", color: "white" }}>Introduction to AI Concepts</h4>
              
              <p style={{ color: "gray" }}>Issued By: Microsoft Learn</p>
              
              <div style={{ marginTop: "15px" }}>
                <a 
                  href="https://learn.microsoft.com/en-us/users/DevanshuYadav-5495/achievements/AKK8ANP7" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ backgroundColor: "#cd5ff8", color: "white", padding: "8px 15px", borderRadius: "15px", textDecoration: "none", fontSize: "0.9em", fontWeight: "bold" }}
                >
                  View Credential
                </a>
              </div>
            </Col>
            
            {/* Certificate 1 */}
            <Col md={3} className="service-card" style={{ padding: "30px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "15px" }}>
              <FaCertificate style={{ fontSize: "3em", color: "#cd5ff8" }} />
              <h4 style={{ marginTop: "15px", color: "white" }}>React JavaScript</h4>
              <p style={{ color: "gray" }}>Alison</p>
              <span style={{ backgroundColor: "#cd5ff8", color: "white", padding: "5px 10px", borderRadius: "10px", fontSize: "0.8em" }}>Completed</span>
            </Col>

            {/* Certificate 2 */}
            <Col md={3} className="service-card" style={{ padding: "30px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "15px" }}>
              <FaCertificate style={{ fontSize: "3em", color: "#cd5ff8" }} />
              <h4 style={{ marginTop: "15px", color: "white" }}>Prompt Engineering</h4>
              <p style={{ color: "gray" }}>IBM Skills Network</p>
              <span style={{ backgroundColor: "#cd5ff8", color: "white", padding: "5px 10px", borderRadius: "10px", fontSize: "0.8em" }}>Verified</span>
            </Col>

            {/* Certificate 3 */}
            <Col md={3} className="service-card" style={{ padding: "30px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "15px" }}>
              <FaCertificate style={{ fontSize: "3em", color: "#cd5ff8" }} />
              <h4 style={{ marginTop: "15px", color: "white" }}>Python for Data Science</h4>
              <p style={{ color: "gray" }}>IBM Skills Network</p>
              <span style={{ backgroundColor: "#cd5ff8", color: "white", padding: "5px 10px", borderRadius: "10px", fontSize: "0.8em" }}>Verified</span>
            </Col>

            {/* --- MICROSOFT CERTIFICATE CARD --- */}
            

          </Row>
        </Container>
      </Container>

      {/* --- SECTION: TIMELINE --- */}
      <Container fluid style={{ paddingBottom: "50px", paddingTop: "50px" }}>
        <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "40px", color: "white" }}>
          My <strong className="purple">Journey</strong>
        </h1>
        
        <Row style={{ justifyContent: "center" }}>
          <Col md={8} style={{ color: "white" }}>
            
            {/* Timeline Item 1 */}
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <div style={{ marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#cd5ff8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FaBriefcase style={{ fontSize: "1.5em", color: "white" }} />
                </div>
                <div style={{ width: "2px", height: "100%", background: "rgba(255,255,255,0.2)", marginTop: "10px" }}></div>
              </div>
              <div>
                <h3 style={{ fontSize: "1.5em" }}>React.js Intern</h3>
                <h5 style={{ color: "#cd5ff8" }}>Ice Hut Technologies | June - Aug 2025</h5>
                <p>Developed and tested scripts using React.js and JavaScript. Collaborated on code reviews.</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <div style={{ marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#cd5ff8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <FaBriefcase style={{ fontSize: "1.5em", color: "white" }} />
                </div>
                <div style={{ width: "2px", height: "100%", background: "rgba(255,255,255,0.2)", marginTop: "10px" }}></div>
              </div>
              <div>
                <h3 style={{ fontSize: "1.5em" }}>SEO Specialist</h3>
                <h5 style={{ color: "#cd5ff8" }}>Indian Deals | June - July 2024</h5>
                <p>Improved website ranking using Google Analytics and Search Console.</p>
              </div>
            </div>

             {/* Timeline Item 3 */}
             <div style={{ display: "flex" }}>
              <div style={{ marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#cd5ff8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <FaGraduationCap style={{ fontSize: "1.5em", color: "white" }} />
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: "1.5em" }}>B.Tech in Computer Science</h3>
                <h5 style={{ color: "#cd5ff8" }}>Engineering College Bikaner | Pursuing</h5>
                <p>GPA: 7.8. Studying Architecture, Algorithms, and Computational Theory.</p>
              </div>
            </div>

          </Col>
        </Row>
      </Container>

    </section>
  );
}

export default Home;