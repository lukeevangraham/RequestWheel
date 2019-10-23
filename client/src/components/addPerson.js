import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AddPerson extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    orgName: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    // this.setState({
    //   email: "",
    //   password: ""
    // });

    // Checking that orgName is available
    axios.get("/user/inOrg/" + this.props.match.params.org).then(res => {
      console.log("LOOK HERE: ", res);
      if (!res.data[0]) {
        alert(
          "That church/organization has not yet signed up for Request Wheel."
        );
        return;
      } else {
        console.log("addPerson-form, email: ");
        console.log(this.state);
        //request to server here
        axios
          .post("/user/", {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            orgName: this.props.match.params.org,
            permissions: "Editor"
          })
          .then(response => {
            console.log("response: ");
            console.log(response);
            // window.location.replace(response)
            if (response.data) {
              console.log("successful signup");
              this.setState({
                redirectTo: "/login"
              });
            } else {
              console.log("Sign-up error");
            }
          })
          .catch(error => {
            console.log("Sign up server error: ");
            console.log(error);
          });
      }
    });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
        console.log("PARAMS: ", this.props.match.params.org)
        console.log("LOOK HERE: ", new URLSearchParams().values())

      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <div className="container-fluid pt-4" id="login">
          <div className="row justify-content-center">
            <div className="col-sm-6 bg-white rounded pt-3">
              <h4 className="text-center">Join {this.props.match.params.org}'s Request Wheel</h4>
              <div className="row justify-content-center mt-3">
                <form className="form col-11">
                  <div className="form-row">
                    {/* <div className="form-group col-12">
                      <label className="sr-only" htmlFor="orgName">
                        Church or Organization Name
                      </label>

                      <input
                        className="form-control"
                        value={this.state.orgName}
                        name="orgName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Church or Organization Name"
                      />
                    </div> */}

                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="firstName">
                        First Name
                      </label>

                      <input
                        className="form-control"
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="lastName">
                        Last Name
                      </label>

                      <input
                        className="form-control"
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>

                    <input
                      className="form-control"
                      value={this.state.email}
                      name="email"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="form-group">
                    <label className="sr-only" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      value={this.state.password}
                      name="password"
                      onChange={this.handleInputChange}
                      type="password"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group">
                    <button
                      className="btn btn-primary col-mr-auto"
                      onClick={this.handleFormSubmit}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AddPerson;
