import React from "react";
import Bust3D from "../header/Bust3D";
import Github3DSkyline from "../header/Github3DSkyline";
import "./Root.css";
import Fade from "react-reveal/Fade";
import About from "../About/About";
import Project from "../Project/Project";
import Certification from "../Certification/Certification";
import Contact from "../Contact/Contact";
import fetchProjects from "../../api/apiProjects";
import fetchCerts from "../../api/apiCerts";
import scrollToComponent from "react-scroll-to-component";
import CurrentSong from "../CurrentSongPlaying/CurrentSong";

var codeIcon = require("../../assets/icons/code-64.png");


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
      firstLoad: true,
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
    const loadState = localStorage.getItem("loadState") == "true";
    this.setState({ firstLoad: loadState });
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
  setLoadState() {
    this.setState({ firstLoad: false });
  }

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
          <div
            onClick={() =>
              scrollToComponent(this.projectRef, {
                offset: 0,
                align: "top",
                duration: 1500,
              })
            }
            id="projects"
          >
            Projects
          </div>{" "}
          <div
            onClick={() =>
              scrollToComponent(this.contactRef, {
                offset: 0,
                align: "top",
                duration: 1500,
              })
            }
            className="contactStyle"
            href="#contact"
          >
            Contact
          </div>
          <div
            onClick={() =>
              scrollToComponent(this.certRef, {
                offset: 0,
                align: "top",
                duration: 1500,
              })
            }
            className="resume"
            href="#certssection"
          >
            Certifications
          </div>
          <section className="threescene">
            {" "}
            <Bust3D
              object="reduced.glb"
              shaders={true}
              animation="follow"
            />{" "}
          </section>
          {this.state.firstLoad == true ? (
            <div className="introSlide">
              <h1 className="introText">
                <span className="loadingDots">Welcome</span>
              </h1>
            </div>
          ) : (
            <div></div>
          )}
          <h1 onClick={this.scrollTop} id="title">
            Hi, I'm Frank Lenoci {this.state.returnText}
          </h1>
          <CurrentSong></CurrentSong>
          <h2 id="subtitle">Click Anywhere Above for a 3D Ripple Effect </h2>
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
                <img alt="code" src={codeIcon}></img>
              </a>
              <Github3DSkyline
                object="phr-nk_2020.glb"
                shaders={true}
                animation="rotate"
              />
            </section>
          </Fade>
          <Fade bottom>
            <div
              ref={(section) => {
                this.projectRef = section;
              }}
              id="projectsection"
            >
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
                      tags={this.state.projects[index].tags}
                    ></Project>
                  );
                })}
              </div>
            </div>
          </Fade>
          <Fade left>
            <div
              ref={(section) => {
                this.certRef = section;
              }}
              id="certssection"
            >
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
            <div
              ref={(section) => {
                this.contactRef = section;
              }}
              id="contact"
            >
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
