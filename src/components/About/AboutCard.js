import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Devanshu Yadav </span>
            from <span className="purple"> Jaipur, Rajasthan.</span>
            <br />
            I am currently pursuing my <span className="purple">B.Tech in Computer Science</span> at Engineering College Bikaner.
            <br />
            I have completed a <span className="purple">React.js Internship</span> at Ice Hut Technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI Solutions
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Prompt Engineering
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Devanshu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;