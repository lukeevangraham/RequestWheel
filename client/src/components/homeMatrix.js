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
        <div className="col-sm-4">
          <h5 className="text-center">
            Last Weekend (
            {moment()
              .day(0)
              .format("MM/DD")}
            )
          </h5>
          <div className="card-header bg-gray-300 text-center">
            Announcement Video
          </div>
          <ul className="list-group list-group-flush">
            {this.state.firstRequests.map(request => {
              console.log("Request: ", request.annVideoDates);
              if (request.annVideoDates) {
                console.log(request.annVideoDates);
                console.log("We have dates!");
                request.annVideoDates.map(date => {
                  if (moment(date).isBetween(moment().day(0).subtract(7, 'days'), moment().day(0))) {
                  console.log("DATE: ", date);
                    console.log("Ann video was due last week!")
                  }
                });
              }
              return <li className="list-group-item">{request.eventName}</li>;
            })}
          </ul>

          <div className="card-header bg-gray-300 text-center">
            Connection Card
          </div>
          <ul className="list-group list-group-flush">
            {this.state.firstRequests.map(request => {
              return <li className="list-group-item">{request.eventName}</li>;
            })}
          </ul>
        </div>

        <div className="col-sm-4 text-center">
          <h5>
            This Weekend (
            {moment()
              .day(7)
              .format("MM/DD")}
            )
          </h5>
          {this.state.secondRequests.map(request => {
            return <p>{request.eventName}</p>;
          })}
        </div>

        <div className="col-sm-4 text-center">
          <h5>
            Next Weekend (
            {moment()
              .day(14)
              .format("MM/DD")}
            )
          </h5>
          {this.state.thirdRequests.map(request => {
            return <p>{request.eventName}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default HomeMatrix;
