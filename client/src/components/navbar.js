import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import logo from "../logo.svg";
import "../App.css";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            email: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    const currentOrg = this.props.orgName;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (

        <nav
          className="navbar navbar-expand-lg navbar-dark bg-gradient-primary shadow"
          id="nav-container"
        >
          <Link className="navbar-brand order-md-last" to="/">Request Wheel</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

            {loggedIn ? (
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" exact to="/">
                      home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                    to="/people"
                    className="nav-link"
                    activeClassName="active"
                     >people</NavLink>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#" onClick={this.logout}>
                      logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">
                      home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">
                      sign up
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
        </nav>

    );
  }
}

export default Navbar;
