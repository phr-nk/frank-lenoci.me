import React from "react";
import { Link } from "react-router-dom";
import "./Certification.css";

class Certification extends React.Component {
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
  render() {
    return (
      <div className="cert-card">
        <div className="cert-text">
          <div className="cert-title">{this.props.name}</div>
          <div className="cert-subtitle">
            <div>Orginzation: {this.props.org}</div>
            <div>Issue Date: {this.props.issue_date}</div>
            <br />
            <div onClick={this.handleClick} className="cert-colapse">
              {this.state.symbol}
            </div>
          </div>
        </div>
        {this.state.open ? (
          <img className="cert-image" src={this.props.picture}></img>
        ) : null}
      </div>
    );
  }
}
export default Certification;
