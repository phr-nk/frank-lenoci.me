import React from "react";
import "./Contact.css";
const github = require("../../assets/icons/github_icon.png");
const gmail = require("../../assets/icons/gmail_icon.png");
const linkedin = require("../../assets/icons/linkedin_icon.png");
function Contact() {
  return (
    <div>
      <h1 id="contact-title">CONTACT</h1>
      <div id="icon_container">
        <a
          className="icon"
          href="https://github.com/phr-nk"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img className="icon" alt="github" src={github}></img>{" "}
        </a>
        <a
          className="icon"
          href="mailto:frank.c.lenoci@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="gmail" className="icon" src={gmail}></img>{" "}
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/frank-lenoci/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img alt="linkedin" className="icon" src={linkedin}></img>{" "}
        </a>
      </div>
    </div>
  );
}

export default Contact;
