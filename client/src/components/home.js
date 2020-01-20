import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActiveCard from "./activeCard";
import HomeMatrix from "./homeMatrix";
import RecentSubmissions from "./recentSubmissions";
import AwaitingApproval from "./awaitingApproval";
import Axios from "axios";

class Home extends Component {
  state = {
    requests: [],
    recentRequests: []
  };
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    this.getRequests(this.props.email);
    this.getRecentRequests(this.props.orgName);
  }
  UNSAFE_componentWillReceiveProps(props) {
    this.getRequests(props.email);
    this.getRecentRequests(props.orgName);
  }

  getRequests(email) {
    Axios.get("/requests/" + email).then(response => {
      // console.log("response: ");
      // console.log(response);
      this.setState({
        ...this.state,
        requests: response.data
      });
      // console.log(this.state.requests);
    });
  }

  getRecentRequests(orgName) {
    Axios.get("/requests/orgName/" + orgName).then(response => {
      // console.log("response for All: ");
      // console.log(response);
      this.setState({
        ...this.state,
        recentRequests: response.data
      });
    });
  }

  handleDeleteClick = id => {

    Axios.delete("/requests/" + id).then(response => {
      this.getRequests(this.props.email);
    });
  };

  render() {
    const imageStyle = {
      width: 400
    };

    const loggedIn = this.props.loggedIn;
    // console.log("home render, props: ");
    // console.log(this.props);

    return (
      <div
        className="container-fluid pt-4 pl-0 pr-0"
        style={{ backgroundColor: "#f8f9fc" }}
      >
        {loggedIn ? (
          <div className="container-fluid">
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
                    <Link
                      to={{
                        pathname: "/home-matrix-print",
                        state: {
                          permissions: this.props.permissions,
                          orgName: this.props.orgName
                        }
                      }}
                    >
                      <i className="fas fa-print text-secondary ml-2"></i>
                    </Link>
                  </h4>
                </div>
                <HomeMatrix
                  permissions={this.props.permissions}
                  orgName={this.props.orgName}
                />
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
                        key={request.id.toString()}
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

                <ul className="list-group list-group-flush">
                  <AwaitingApproval
                    permissions={this.props.permissions}
                    tenRecent={this.state.recentRequests}
                    orgName={this.props.orgName}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-4 card-deck">
              <div className="card border-left-primary shadow h-100 col-sm-12 p-0 ml-0">
                <div className="card-header text-center py-3">
                  <h4 className="m-0 font-weight-bold text-primary text-center">
                    Recent Submissions
                  </h4>
                </div>

                <ul className="list-group list-group-flush">
                  <RecentSubmissions
                    permissions={this.props.permissions}
                    tenRecent={this.state.recentRequests}
                    orgName={this.props.orgName}
                  />
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="jumbotron jumbotron-fluid rounded mr-4 ml-4">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 col-12">
                    <img
                      src="/images/wheel.png"
                      style={imageStyle}
                      alt=""
                      className="flex-grow-1 img-fluid"
                    />
                  </div>
                  <div className="col-sm-8 col-12 p-4">
                    <h1 className="display-3 text-dark flex-grow-2">
                      Request Wheel
                    </h1>
                    <p className="lead text-uppercase pl-1">
                      Streamlined Church Communications
                    </p>
                    <hr className="my-4" />
                    <p>
                      Empowers people in your church to submit content for your
                      church's print & digital media, flyers & more. Then
                      organizes your content.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid px-0">
              <div className="row no-gutters justify-content-center bg-gradient-primary pt-5 pb-5">
                <div className="col-sm-10">
                  <h2 className="text-center text-white">Overview</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-sm-6 p-4 rounded">
                      <img
                        src="/images/fillForms.svg"
                        alt="lady organizing content"
                        className="img-fluid"
                      />{" "}
                    </div>
                    <div className="col-sm-6">
                      <p className="text-white">
                        Managing church communications can be complex. There may
                        be multiple publications to manage (newsletters,
                        announcement videos, campus TV posters, etc.) Many
                        people may want their content featured in these outlets.
                        Request Wheel helps receive and organize those requests.
                        It's way better than coordinating publications solely
                        through email or paper forms. Contributors can see when
                        (or if) their content will be published.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row no-gutters justify-content-center bg-gradient-success pt-5 pb-5">
                <div className="col-sm-10">
                  <h2 className="text-center text-white">Signing up</h2>
                  <h3 className="text-center text-white">Initial Signup</h3>
                  <p className="text-center text-white mb-1">
                    The Signup form should only be filled out{" "}
                    <span style={{ fontWeight: "bold" }}>once per church</span>.
                    The first person to sign up receives administrator
                    privileges.
                  </p>

                  <img
                    src="/images/initialSignup.png"
                    alt="initial signup dialog box"
                    className="img-fluid mx-auto d-block mt-1 mb-4 rounded"
                  />
                  <p className="text-center text-white mb-1">
                    Additional users from a church already signed-up should be
                    added through the 'Add User' form (see the next section).
                  </p>
                  <h3 className="text-center text-white mt-4">
                    Adding users to an existing church
                  </h3>
                  <p className="text-center text-white mb-1">
                    Click on 'People' in the top navigation bar. Users can be
                    added to a church's wheel through the URL found at the top
                    of this 'People' page.
                  </p>
                  <img
                    src="/images/addUser1.png"
                    alt="locating the add user link"
                    className="img-fluid mx-auto d-block mb-4 rounded"
                  />
                  <p className="text-center text-white mb-1">
                    When additional users access that link they can fill out the
                    'Add User' form:
                  </p>
                  <img
                    src="/images/addUser2.png"
                    alt="add user dialog box"
                    className="img-fluid mx-auto d-block rounded"
                  />
                </div>
              </div>

              <div className="row no-gutters justify-content-center bg-gradient-info pt-5 pb-5">
                <div className="col-sm-10">
                  <h2 className="text-center text-white">
                    Submitting a Request
                  </h2>
                  <img
                    src="/images/submit.png"
                    alt="communications request form"
                    className="img-fluid mx-auto d-block rounded"
                  />
                </div>
              </div>

              <div className="row no-gutters justify-content-center bg-gradient-secondary pt-5 pb-5">
                <div className="col-sm-10">
                  <h2 className="text-center text-white">
                    Approving a Request
                  </h2>
                  <p className="text-center text-white mb-1">
                    After a user submits a Request Form it is placed in the
                    'Requests Awaiting Approval' box on the Home page for the
                    church administrator to review.
                  </p>
                  <img
                    src="/images/approve1.png"
                    alt="Requests awaiting approval links on the Home Page"
                    className="img-fluid mx-auto d-block mb-4 rounded"
                  />
                  <p className="text-center text-white mb-1">
                    Administrators can approve a submission by clicking on that
                    submission then checking the 'Approve' box at the bottom of
                    the form. (The 'Approve' box is only available to
                    administrators.)
                  </p>
                  <img
                    src="/images/approve2.png"
                    alt="approve button at bottom of submit and edit forms (only available to admins)"
                    className="img-fluid mx-auto d-block mb-4 rounded"
                  />
                </div>
              </div>

              <div className="row no-gutters justify-content-center bg-gradient-primary pt-5 pb-5">
                <div className="col-sm-10">
                  <h2 className="text-center text-white">The Home Page</h2>
                  <p className="text-center text-white mb-1">
                    After a request is approved it appears in the 'Current
                    Communication Plans Matrix' at the top of the Home page. The
                    request can be edited or reviewed by clicking on it in the
                    Matrix or elsewhere on the Home page.
                  </p>
                  <img
                    src="/images/home.png"
                    alt="Request Wheel Home Page"
                    className="img-fluid mx-auto d-block mb-4 rounded"
                  />
                </div>
              </div>

              <div className="row no-gutters justify-content-center bg-gradient-info pt-5 pb-5">
                <div className="col-sm-10">
                  <h2 className="text-center text-white">
                    Previewing Newsletter Content
                  </h2>
                  <p className="text-center text-white mb-1">
                    Clicking on the word 'Newsletter' in the 'Current
                    Communication Plans Matrix' displays a page containing the
                    body of all that weekend's newsletter content.
                  </p>
                  <img
                    src="/images/newsletter.png"
                    alt="assembled newsletter content"
                    className="img-fluid mx-auto d-block mb-4 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Home;
