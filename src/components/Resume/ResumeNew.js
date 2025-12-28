import pdf from "../../Assets/resume.pdf";
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import emailjs from "@emailjs/browser"; // ✅ IMPORT EMAILJS

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Worker Setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const form = useRef(); // ✅ Reference for the form
  const [done, setDone] = useState(false); // ✅ State for success message

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // ✅ FUNCTION TO SEND EMAIL
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6mc153v",    // ❌ PASTE YOUR SERVICE ID HERE
        "template_e7htofl",   // ❌ PASTE YOUR TEMPLATE ID HERE
        form.current,
        "rGMcA0jlRoCPwfyYj" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset(); // Clear form after sending
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div>
      <Container fluid className="resume-section">
        
        {/* --- RESUME SECTION --- */}
        <h1 className="text-center" style={{ color: "white", marginBottom: "30px" }}>
           My <span className="purple">Resume</span>
        </h1>

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <div className="d-flex justify-content-center">
            <Document 
              file={pdf} 
              className="d-flex justify-content-center"
              error={<div style={{color: "white"}}>Please download CV to view.</div>}
              loading={<div style={{color: "white"}}>Loading Resume...</div>}
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </div>
        </Row>

        {/* --- CONTACT SECTION --- */}
        <Container style={{ paddingTop: "100px", paddingBottom: "50px" }}>
          <Row>
            <Col md={12} className="text-center">
              <h1 style={{ fontSize: "2.5em", color: "white" }}>
                Contact <span className="purple">Me</span>
              </h1>
              <p style={{ color: "white" }}>
                Available for freelance opportunities and collaborations.
              </p>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", marginTop: "20px" }}>
            
            {/* Contact Info */}
            <Col md={5} className="contact-card" style={{ marginRight: "20px", marginBottom: "20px" }}>
              <h3 style={{ color: "#cd5ff8", paddingBottom: "10px" }}>Get in Touch</h3>
              <div style={{ color: "white", fontSize: "1.1em", lineHeight: "2.5", textAlign: "left", paddingLeft: "20px" }}>
                <p>
                  <AiOutlineMail style={{ fontSize: "1.4em", marginRight: "10px" }} /> 
                  yadavdevanshu004@gmail.com
                </p>
                <p>
                  <AiFillPhone style={{ fontSize: "1.4em", marginRight: "10px" }} /> 
                  +91 9079743480
                </p>
                <p>
                  <FaGithub style={{ fontSize: "1.4em", marginRight: "10px" }} /> 
                  <a href="https://github.com/dibansui" target="_blank" rel="noreferrer" style={{ color: "white", textDecoration:"none" }}>github.com/dibansui</a>
                </p>
                <p>
                  <FaLinkedinIn style={{ fontSize: "1.4em", marginRight: "10px" }} /> 
                   <a href="https://linkedin.com/in/devanshu-yadav-1b560b256" target="_blank" rel="noreferrer" style={{ color: "white", textDecoration:"none" }}>LinkedIn Profile</a>
                </p>
              </div>
            </Col>

            {/* Email Form */}
            <Col md={6} className="contact-card">
              <h3 style={{ color: "#cd5ff8", paddingBottom: "15px" }}>Send a Message</h3>
              
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group controlId="formName" className="mb-3">
                  {/* ✅ Added name="user_name" for EmailJS */}
                  <Form.Control type="text" name="user_name" placeholder="Your Name" className="contact-inputs" required />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  {/* ✅ Added name="user_email" for EmailJS */}
                  <Form.Control type="email" name="user_email" placeholder="Your Email" className="contact-inputs" required />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  {/* ✅ Added name="message" for EmailJS */}
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Your Message" className="contact-inputs" required />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ width: "100%" }}>
                  Send Message
                </Button>
                
                {/* Success Message */}
                {done && <span style={{ color: "green", marginTop: "10px", display:"block" }}>Thanks for contacting me! I will reply soon.</span>}
              
              </Form>
            </Col>
          </Row>
        </Container>

      </Container>
    </div>
  );
}

export default ResumeNew;