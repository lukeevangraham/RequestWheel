import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Signup from "./components/sign-up";
import LoginForm from "./components/login-form";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SubmitRequest from "./components/submit-request";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null,
      firstName: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          email: response.data.user.email,
          firstName: response.data.user.firstName
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          email: null,
          firstName: null
        });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* greet user if logged in: */}
          {this.state.loggedIn && (
            <p className="mt-3">Join the party, {this.state.firstName}!</p>
          )}
          {/* Routes to different components */}
          <Route exact path="/" render={() => <Home email={this.state.email} name={this.state.firstName} loggedIn={this.state.loggedIn} />} />
          <Route
            path="/login"
            render={() => <LoginForm updateUser={this.updateUser} />}
          />
          <Route path="/signup" render={() => <Signup />} />
          {this.state.loggedIn &&
          <Route path="/submit-request" render={() => <SubmitRequest email={this.state.email} />} />
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
