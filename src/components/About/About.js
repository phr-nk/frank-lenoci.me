import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div id="aboutcontainer">
        <h1 id="about">About Me </h1>
        <p id="text">
          Hello! I'm Frank and am a graduate from DePaul University with a
          Bachelor's of Science degree in Computer Science. Currently, I am
          working at{" "}
          <a
            className="highmetric_link"
            href="https://www.newrocket.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NewRocket
          </a>{" "}
          as a Software Engineer specializing in ServiceNow. I have 5 years of
          experience working on different software projects using various tech
          stacks. I am passionate about developing and creating things, whether
          that be software related or something more artistic like music or
          drawing. This page is dedicated to showcasing some of these and if
          would like to contact me, my information is located at the bottom of
          the page.{" "}
        </p>
      </div>
    );
  }
}
export default About;
