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
      fullProjectList: null,
      isSticky: false,
      returnText: " ",
      certs: null,
      firstLoad: true,
      tags: null,
      selectedTag: "all",
      matches: window.matchMedia("(min-width: 480px)").matches,
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
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 480px)").addEventListener("change", handler);
  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  };
  fetchData = () => {
    fetchCerts().then((data) => {
      this.setState({ certs: data });
    });
    fetchProjects()
      .then((data) => {
        this.setState({ projects: data });
        this.setState({ fullProjectList: data });
        return data;
      })
      .then((res) => {
        var projects = res;
        var tagsWhole = [];
        tagsWhole.push({ name: "All", color: "red", selected: "selected" });
        for (var i = 0; i < projects.length; i++) {
          var tags = projects[i].tags;
          for (var j = 0; j < tags.length; j++) {
            tagsWhole.push({
              name: tags[j].name,
              color: tags[j].color,
              selected: "notSelected",
            });
          }
        }
        var jsonObject = tagsWhole.map(JSON.stringify);

        var uniqueSet = new Set(jsonObject);
        var uniqueArray = Array.from(uniqueSet).map(JSON.parse);

        this.setState({ tags: uniqueArray });
      });
  };
  setLoadState() {
    this.setState({ firstLoad: false });
  }
  handleClick = (event, message) => {
    this.setState({ selectedTag: message });

    //Set selected tag background
    var tags = this.state.tags;
    var objIndex = tags.findIndex((obj) => obj.name === message);
    tags[objIndex].selected = "selected";

    //Loop through tag array to deselect previous tags
    for (var x = 0; x < tags.length; x++) {
      if (tags[x].name != message) {
        tags[x].selected = "notSelected";
      }
    }

    if (message == "All") {
      this.setState({ projects: this.state.fullProjectList });
    } else {
      var filteredArr = [];

      for (var i in this.state.fullProjectList) {
        for (var j in this.state.fullProjectList[i].tags) {
          if (message == this.state.fullProjectList[i].tags[j].name) {
            filteredArr.push(this.state.fullProjectList[i]);
          }
        }
      }

      this.setState({ projects: filteredArr });
    }
  };

  render() {
    if (this.state.projects === null || this.state.tags === null) {
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
          <div>
            <CurrentSong></CurrentSong>
          </div>
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
          <div
            ref={(section) => {
              this.projectRef = section;
            }}
            id="projectsection"
          ></div>
          <Fade bottom>
            <h1 id="project-title">PROJECTS</h1>
          </Fade>
          <Fade bottom>
            <div id="tagcontainer">
              {this.state.tags.map((value, index) => {
                return (
                  <div
                    onClick={(event) => this.handleClick(event, value.name)}
                    id="tag"
                    className={
                      value.selected == "selected"
                        ? value.color + " " + value.selected
                        : value.color
                    }
                  >
                    {value.name}
                  </div>
                );
              })}
            </div>
          </Fade>
          <div>
            {this.state.matches ? (
              <Fade bottom>
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
              </Fade>
            ) : (
              <div>
                {this.state.projects.map((value, index) => {
                  return (
                    <Fade bottom>
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
                    </Fade>
                  );
                })}
              </div>
            )}
          </div>
          <Fade left>
            <div
              ref={(section) => {
                this.certRef = section;
              }}
              id="certssection"
            >
              <h1 id="cert-title">CERTIFICATIONS</h1>
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
