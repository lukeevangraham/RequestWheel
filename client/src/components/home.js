import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActiveCard from "./activeCard";
import HomeMatrix from "./homeMatrix";
import RecentSubmissions from "./recentSubmissions";
import AwaitingApproval from "./awaitingApproval"
import Axios from "axios";

class Home extends Component {
  state = {
    requests: [],
    recentRequests: []
  };
  constructor() {
    super();
  }

  componentDidMount() {
    this.getRequests(this.props.email);
    this.getRecentRequests(this.props.orgName);
  }
  componentWillReceiveProps(props) {
    this.getRequests(props.email);
  }

  getRequests(email) {
    console.log(email);

    Axios.get("/requests/" + email).then(response => {
      console.log("response: ");
      console.log(response);
      this.setState({
        ...this.state,
        requests: response.data
      });
      // console.log(this.state.requests);
    });
  }

  getRecentRequests(orgName) {
    Axios.get("/requests/orgName/" + orgName).then(response => {
      console.log("response for All: ");
      console.log(response);
      this.setState({
        ...this.state,
        recentRequests: response.data
      });
    });
  }

  handleDeleteClick = id => {
    console.log("It's delete time!", id);

    Axios.delete("/requests/" + id).then(response => {
      console.log("response: ", response);
      this.getRequests(this.props.email);
    });
  };

  render() {
    const imageStyle = {
      width: 400
    };

    const loggedIn = this.props.loggedIn;
    console.log("home render, props: ");
    console.log(this.props);

    return (
      <div
        className="container-fluid pt-4"
        style={{ backgroundColor: "#f8f9fc" }}
      >
        {loggedIn ? (
          <div>
            <div className="row mt-4 mb-5">
              <div className="col text-center">
                <Link
                  role="button"
                  className="btn btn-primary"
                  to="/submit-request"
                >
                  Submit A New Request
                </Link>
              </div>
            </div>

            

            <div className="row mt-4">
              <div className="card border-left-primary shadow h-100 col-sm-12 p-0">
                <div className="card-header text-center py-3">
                  <h4 className="m-0 font-weight-bold text-primary text-center">
                    Current Communication Plans
                  </h4>
                </div>
                <HomeMatrix permissions={this.props.permissions} orgName={this.props.orgName} />
              </div>
            </div>

            <div className="row mt-3 card-deck">
              <div className="card border-left-primary shadow h-100 col-sm-6 p-0 ml-0">
                <div className="card-header py-3">
                  <h4 className="m-0 font-weight-bold text-primary text-center">
                    Your Active Requests
                  </h4>
                </div>

                <ul className="list-group list-group-flush">
                  {this.state.requests.map(request => {
                    return (
                      <ActiveCard
                        eventName={request.eventName}
                        requests={this.state.requests}
                        onClick={this.handleDeleteClick}
                        id={request.id}
                      />
                    );
                  })}
                </ul>
              </div>

              <div className="card border-left-primary shadow h-100 col-sm-6 p-0 mr-0">
                <div className="card-header py-3">
                  <h4 className="m-0 font-weight-bold text-primary text-center">
                    Requests Awaiting Approval
                  </h4>
                </div>
                <AwaitingApproval permissions={this.props.permissions} tenRecent={this.state.recentRequests} orgName={this.props.orgName} />
              </div>
            </div>

            <div className="row mt-4">
              <div className="card border-left-primary shadow h-100 col-sm-12 p-0">
                <div className="card-header text-center py-3">
                  <h4 className="m-0 font-weight-bold text-primary text-center">
                    Recent Submissions
                  </h4>
                </div>
                <RecentSubmissions permissions={this.props.permissions} tenRecent={this.state.recentRequests} orgName={this.props.orgName} />
              </div>
            </div>


          </div>
        ) : (
          <div className="row mt-3">
            <div className="col">
              <div className="jumbotron d-flex">
                <div className="col-4">
                  <img
                    src="/images/wheel.png"
                    style={imageStyle}
                    alt=""
                    className="flex-grow-1 img-fluid"
                  />
                </div>
                <h1 className="display-3 justify-content-center align-self-center pb-5 pl-5 mb-5 text-dark flex-grow-2">
                  Request Wheel
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Home;
