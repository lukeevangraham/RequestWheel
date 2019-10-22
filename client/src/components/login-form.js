import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email,
            firstName: response.data.firstName,
            orgName: response.data.orgName
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container-fluid pt-5" id="login">
            <div className="row justify-content-center">
          <div className="col-sm-6  bg-white rounded pt-3 shadow">
            <h4 className="text-center">Login</h4>
            <div className="row justify-content-center mt-3">
            
            <form className="form col-11">

              <div className="form-group">
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
              </div>

              <div className="form-group">
                  <label className="sr-only" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    placeholder="password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />

              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary col-mr-auto"
                  onClick={this.handleSubmit}
                  type="submit"
                >
                  Login
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

export default LoginForm;
