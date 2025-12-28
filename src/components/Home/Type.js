import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
  "Full Stack Developer",
  "React.js Specialist",
  "AI & Deep Learning Enthusiast",
  "Graphic Designer",
  "Prompt Engineer"
],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;