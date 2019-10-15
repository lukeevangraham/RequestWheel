import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActiveCard from "./activeCard";
import Axios from "axios";

class Home extends Component {
  state = {
    requests: []
  };
  constructor() {
    super();
  }

  componentDidMount() {
    this.getRequests(this.props.email);
  }
  componentWillReceiveProps(props) {

    this.getRequests(props.email);
}

  getRequests(email) {
    console.log(email);

    Axios.get("/requests/" + email).then(response => {
      console.log("response: ")
      console.log(response)
      this.setState({
        ...this.state,
        requests: response.data
      });
      console.log(this.state.requests)
    });
  }

  render() {
    const imageStyle = {
      width: 400
    };

    const loggedIn = this.props.loggedIn;
    console.log("home render, props: ");
    console.log(this.props.loggedIn);

    return (
      <div className="container">
        {loggedIn ? (
          <div>
            <div className="row mt-4 mb-5">
              <div className="col">
                <Link
                  role="button"
                  className="btn btn-primary"
                  to="/submit-request"
                >
                  Submit A New Request
                </Link>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-6">
                <h4>Processed Requests</h4>
              </div>

              <div className="col-6">
                <ActiveCard requests={this.state.requests} />
              </div>
            </div>
          </div>
        ) : (
          <div className="row mt-3">
            <div className="col">
              <p>It's good to be home</p>
              <img
                style={imageStyle}
                src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Home;
