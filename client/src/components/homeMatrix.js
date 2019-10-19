import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import moment from "moment";
import Axios from "axios";

class HomeMatrix extends Component {
  state = {
    firstRequests: [],
    secondRequests: [],
    thirdRequests: []
  };

  componentDidMount() {
    Promise.all([
      Axios.get(
        "/requests/date/" +
          moment()
            .day(0)
            .format("YYYY-MM-DD")
      ),
      Axios.get(
        "/requests/date/" +
          moment()
            .day(0)
            .add(7, "d")
            .format("YYYY-MM-DD")
      ),
      Axios.get(
        "/requests/date/" +
          moment()
            .day(0)
            .add(14, "d")
            .format("YYYY-MM-DD")
      )
    ]).then(resultArray => {
      this.setState({
        ...this.state,
        firstRequests: resultArray[0].data,
        secondRequests: resultArray[1].data,
        thirdRequests: resultArray[2].data
      });
      console.log("state: ");
      console.log(this.state);
    });
    // this.getRequests(moment().day(0).format("YYYY-MM-DD"))
  }

  getRequests(date) {
    console.log("Date: ", date);
    Axios.get("/requests/date/" + date).then(response => {
      console.log("response: ");
      console.log(response);
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-4 text-center">
          <h5>Last Weekend</h5>
          {this.state.firstRequests.map(request => {
            return <p>{request.eventName}</p>;
          })}
        </div>

        <div className="col-sm-4 text-center">
          <h5>This Weekend</h5>
          {this.state.secondRequests.map(request => {
            return <p>{request.eventName}</p>;
          })}
        </div>

        <div className="col-sm-4 text-center">
          <h5>Next Weekend</h5>
          {this.state.thirdRequests.map(request => {
            return <p>{request.eventName}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default HomeMatrix;
