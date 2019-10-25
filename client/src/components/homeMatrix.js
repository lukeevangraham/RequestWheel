import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import moment from "moment";
import Axios from "axios";
import WeekendPlan from "./weekendPlan";

class HomeMatrix extends Component {


  componentDidMount() {
    console.log("Home matrix is here!");
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
          <WeekendPlan
            date={moment()
              .day(0)
              .format("YYYY-MM-DD")}
          />
        </div>

        <div className="col-sm-4 text-center">
          <h5>
            This Weekend (
            {moment()
              .day(7)
              .format("MM/DD")}
            )
          </h5>
          <WeekendPlan
            date={moment()
              .day(7)
              .format("YYYY-MM-DD")}
          />
        </div>

        <div className="col-sm-4 text-center">
          <h5>
            Next Weekend (
            {moment()
              .day(14)
              .format("MM/DD")}
            )
          </h5>
          <WeekendPlan
            date={moment()
              .day(14)
              .format("YYYY-MM-DD")}
          />
        </div>
      </div>
    );
  }
}

export default HomeMatrix;
