import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";
class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, symbol: "+" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState({ open: !this.state.open });
    this.state.symbol === "+"
      ? this.setState({ symbol: "-" })
      : this.setState({ symbol: "+" });
  };
  handleLinkClick() {}
  render() {
    return (
      <div className="project-card">
        <Link to={`/projects/${this.props.id}`} onClick={this.handleLinkClick}>
          {" "}
          <img
            className="project-image"
            alt="project.name"
            src={this.props.img}
          />{" "}
        </Link>
        <div className="project-text">
          <div className="project-title">{this.props.name}</div>
          <div className="tagContainer">
            {this.props.tags.map((el) => {
              const color = el.color;
              return <div className={color}>{el.name} </div>;
            })}
          </div>
          <div onClick={this.handleClick} className="collapsible">
            {this.state.symbol}
          </div>

          {this.state.open ? (
            <div className="project-content">
              <div className="project-subtitle">
                <br></br>
                {this.props.subtitle}
              </div>
              <div className="project-links">
                Links:{" "}
                <a
                  href={this.props.github}
                  className="link-url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
                ,
                <a
                  className="link-url"
                  href={this.props.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Url
                </a>
              </div>
              <br></br>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Project;
