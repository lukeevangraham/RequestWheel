import React, { Component } from "react";

class Form extends Component {
  // Setting the component's initial state
  state = {
    username: "",
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
    //   username: "",
    //   password: ""
    // });

    console.log("sign-up-form, username: ");
    console.log(this.state.username);
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5 mt-5">
            <form className="form">
              <label className="mr-2" htmlFor="username">Username: </label>
              <input
                value={this.state.username}
                name="username"
                onChange={this.handleInputChange}
                type="text"
              />
              <br/>
              <label className="mr-2" htmlFor="password">Password: </label>
              <input
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="text"
              />
              <br/>
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
