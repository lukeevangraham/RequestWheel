import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import moment from "moment";
import Axios from "axios";
import WeekendPlan from "./weekendPlan";

class HomeMatrixPrint extends Component {
  componentDidMount() {
    console.log("Home matrix print is here!");
    console.log("PROPS: ", this.props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <table className="table">
            <div className="card-body bg-gray-800">
              <h5 className="card-title m-0 font-weight-bold text-gray-100">
                Last Weekend (
                {moment()
                  .day(0)
                  .format("MM/DD")}
                )
              </h5>
            </div>
            <WeekendPlan
              date={moment()
                .day(0)
                .format("YYYY-MM-DD")}
              permissions={this.props.permissions}
              orgName={this.props.orgName}
            />
          </table>
        </div>

        <div className="col-sm-3">
          <table className="table">
            <div className="card-body bg-gray-800">
              <h5 className="card-title m-0 font-weight-bold text-gray-100">
                This Weekend (
                {moment()
                  .day(7)
                  .format("MM/DD")}
                )
              </h5>
            </div>
            <WeekendPlan
              date={moment()
                .day(7)
                .format("YYYY-MM-DD")}
              permissions={this.props.permissions}
              orgName={this.props.orgName}
            />
          </table>
        </div>
        <div className="col-sm-3">
          <table className="table">
            <div className="card-body  bg-gray-800">
              <h5 className="card-title m-0 font-weight-bold text-gray-100">
                Next Weekend (
                {moment()
                  .day(14)
                  .format("MM/DD")}
                )
              </h5>
            </div>
            <WeekendPlan
              date={moment()
                .day(14)
                .format("YYYY-MM-DD")}
              permissions={this.props.permissions}
              orgName={this.props.orgName}
            />
          </table>
        </div>

        <div className="col-sm-3">
          <table className="table">
            <div className="card-body bg-gray-800">
              <h5 className="card-title m-0 font-weight-bold text-gray-100">
                2 Weekends Out (
                {moment()
                  .day(21)
                  .format("MM/DD")}
                )
              </h5>
            </div>
            <WeekendPlan
              date={moment()
                .day(21)
                .format("YYYY-MM-DD")}
              permissions={this.props.permissions}
              orgName={this.props.orgName}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default HomeMatrixPrint;
