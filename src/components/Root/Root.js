import React from "react";
import Bust3D from "../header/Bust3D";
import Github3DSkyline from "../header/Github3DSkyline";
import "./Root.css";
import Fade from "react-reveal/Fade";
import About from "../About/About";
import Project from "../Project/Project";
import Certification from "../Certification/Certification";
import { isMobile } from "react-device-detect";
import Contact from "../Contact/Contact";

import fetchProjects from "../../api/apiProjects";
import fetchCerts from "../../api/apiCerts";

var codeIcon = require("../../assets/icons/code-64.png");
var pdf = require("../../assets/updated_resume_8_2020.pdf");
var default_picture = require("../../assets/binary.jpg");

function vh(v) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
      isSticky: false,
      returnText: " ",
      certs: null,
    };
  }
  componentDidMount() {
    this.setState({ loaded: true });
    this.fetchData();
    document.addEventListener("scroll", (e) => {
      window.scrollY > window.outerHeight - vh(25)
        ? this.setState({ returnText: "  +  " })
        : this.setState({ returnText: "  " });
    });
  }
  scrollTop = () => {
    window.scrollTo(0, 0);
  };
  fetchData = () => {
    fetchCerts().then((data) => {
      this.setState({ certs: data });
    });
    fetchProjects().then((data) => {
      this.setState({ projects: data });
    });
  };

  render() {
    if (this.state.projects === null) {
      return (
        <div id="rootmain">
          <h1>LOADING</h1>
        </div>
      );
    } else {
      return (
        <div id="rootmain">
          <a href="#projectsection" id="projects">
            Projects
          </a>{" "}
          <a className="contactStyle" href="#contact">
            Contact
          </a>
          <a className="resume" href="#certssection">
            Certifications
          </a>
          <section className="threescene">
            {" "}
            <Bust3D
              object="reduced.glb"
              shaders={true}
              animation="follow"
            />{" "}
          </section>
          {this.props.firstLoad ? (
            <div className="introSlide">
              {" "}
              <h1 className="introText">Welcome to PHRANK.ME</h1>{" "}
            </div>
          ) : null}
          <h1 onClick={this.scrollTop} id="title">
            Hi, I'm Frank Lenoci {this.state.returnText}
          </h1>
          <h2 id="subtitle">Click Anywhere Above for Ripple Effect </h2>
          <Fade bottom>
            <About></About>
          </Fade>
          <Fade bottom>
            <section className="threescene">
              <h1 id="Skyline">3D Skyline of my 2020 GitHub Contributions</h1>
              <a
                className="code"
                href="https://github.com/phr-nk?tab=overview&from=2020-12-01&to=2020-12-31"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={codeIcon}></img>
              </a>
              <Github3DSkyline
                object="phr-nk_2020.glb"
                shaders={true}
                animation="rotate"
              />
            </section>
          </Fade>
          <Fade bottom>
            <div id="projectsection">
              <h1>PROJECTS</h1>
              <div id="projectcontainer">
                {this.state.projects.map((value, index) => {
                  return (
                    <Project
                      name={this.state.projects[index].name}
                      img={
                        this.state.projects[index].img != null
                          ? this.state.projects[index].img
                          : default_picture
                      }
                      subtitle={this.state.projects[index].subtitle}
                      url={this.state.projects[index].links[0].url}
                      github={this.state.projects[index].links[0].githubUrl}
                      id={this.state.projects[index].id}
                    ></Project>
                  );
                })}
              </div>
            </div>
          </Fade>
          <Fade left>
            <div id="certssection">
              <h1>CERTIFICATIONS</h1>
              <div>
                {this.state.certs.map((value, index) => {
                  return (
                    <Certification
                      name={this.state.certs[index].name}
                      picture={this.state.certs[index].picture}
                      org={this.state.certs[index].org}
                      issue_date={this.state.certs[index].issue_date}
                    ></Certification>
                  );
                })}
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div id="contact">
              <Contact></Contact>

              <footer>
                {" "}
                <h2 className="footerText">
                  {" "}
                  <hr></hr>Designed and Developed by Frank Lenoci
                </h2>
              </footer>
            </div>
          </Fade>
        </div>
      );
    }
  }
}
export default Root;
