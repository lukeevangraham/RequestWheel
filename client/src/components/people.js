import React, { Component } from "react";
import Axios from "axios";

class People extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.getPeopleInOrg(this.props.orgName);
  }

  getPeopleInOrg(orgName) {
    Axios.get("/user/inOrg/" + this.props.orgName).then(res => {
      const response = res.data;
      console.log("RESPONSE: ", response);
    });
  }

  render() {
    return (
      <div className="container">
        <p>Hi there from {this.props.orgName}</p>
      </div>
    );
  }
}

export default People;
