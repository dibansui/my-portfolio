import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ New Import for X logo

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Devanshu Yadav</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DY</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/dibansui"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/yadavaheer004" /* Update with your X profile link */
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaXTwitter /> {/* ✅ Updated Icon */}
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/devanshu-yadav-1b560b256"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;