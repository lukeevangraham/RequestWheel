import React from "react";

class Profile extends React.Component {
  state = {
    org: null
  };

  componentDidMount(props) {
    // const { org } = this.props.params;

    console.log("ORG is: ", this.props);
    // this.setState(() => ({ org }))
  }
  render() {
      return (
      <p>Hi There from {this.state.org}</p>

      )
  }
}

export default Profile;
