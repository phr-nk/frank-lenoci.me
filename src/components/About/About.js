import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div id="aboutcontainer">
        <h1 id="about">About Me </h1>
        <p>
          I am a graduate from DePaul University with a Bachelor's of Science
          degree in Computer Science. I am currently working at{" "}
          <a
            className="highmetric_link"
            href="https://www.highmetric.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Highmetric
          </a>{" "}
          as a Technical Consultant. I have 5 years of experience working on
          different software projects using various tech stacks. I am passionate
          about developing creative things, whether that be software related or
          something more artistic like music. This page is dedicated to
          showcasing some of these and if would like to contact me, my
          information is located at the bottom of the page.{" "}
        </p>
      </div>
    );
  }
}
export default About;