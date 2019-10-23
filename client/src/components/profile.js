import React from "react";

class Profile extends React.Component {
  state = {
    org: null
  };

  componentDidMount() {
    const { org } = this.props.match.params;

    console.log("ORG is: ", org);
    this.setState(() => ({ org }))
  }
  render() {
      return (
      <p>Hi There from {this.state.org}</p>

      )
  }
}

export default Profile;
