import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios"

class Form extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: ""
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

    console.log("sign-up-form, email: ");
    console.log(this.state.email);
    //request to server here
    axios.post('/user/', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      console.log("response: ")
      console.log(response)
      // window.location.replace(response)
      if (response.data) {
        console.log('successful signup')
        this.setState({
          redirectTo: '/login'
        })
      } else {
        console.log('Sign-up error');
      }
    }).catch(error => {
      console.log('Sign up server error: ')
      console.log(error);
    })
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
  } else {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
        <h4>Sign up</h4>
        <div className="row justify-content-center mt-3">
          <div className="col-sm-6">
            <form className="form">

              <div className="form-group row">
              <label className="text-dark col-sm-3 col-form-label" htmlFor="email">Email: </label>
              <div className="col-sm-9">
              <input
              className="form-control"
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="text"
              />
              </div>
              </div>

            <div className="form-group row">
              <label className="text-dark col-sm-3 col-form-label" htmlFor="password">Password: </label>
              <div className="col-sm-9">
              <input
              className="form-control"
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="text"
              />
              </div>
              </div>

<div className="form-group">
              <button className="btn btn-primary col-mr-auto" onClick={this.handleFormSubmit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  }
}

export default Form;
