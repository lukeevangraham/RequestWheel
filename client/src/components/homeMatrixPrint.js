import React, { Component } from "react";
import moment from "moment";
import WeekendPlanPrint from "./weekendPlanPrint";

class HomeMatrixPrint extends Component {
  componentDidMount() {
    // console.log("Home matrix print is here!");
    // console.log("PROPS: ", this.props.location.state);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <table className="table">
            <thead className="thead-dark">
              <th>
                Last Weekend (
                {moment()
                  .day(0)
                  .format("MM/DD")}
                )
              </th>
            </thead>
            <WeekendPlanPrint
              date={moment()
                .day(0)
                .format("YYYY-MM-DD")}
              permissions={this.props.location.state.permissions}
              orgName={this.props.location.state.orgName}
            />
          </table>
        </div>

        <div className="col-sm-3">
          <table className="table">
            <thead className="thead-dark">
              <th>
                This Weekend (
                {moment()
                  .day(7)
                  .format("MM/DD")}
                )
              </th>
            </thead>

            <WeekendPlanPrint
              date={moment()
                .day(7)
                .format("YYYY-MM-DD")}
              permissions={this.props.location.state.permissions}
              orgName={this.props.location.state.orgName}
            />
          </table>
        </div>

        <div className="col-sm-3">
          <table className="table">
<thead className="thead-dark">
              <th>
                Next Weekend (
                {moment()
                  .day(14)
                  .format("MM/DD")}
                )
                </th>
              </thead>

            <WeekendPlanPrint
              date={moment()
                .day(14)
                .format("YYYY-MM-DD")}
              permissions={this.props.location.state.permissions}
              orgName={this.props.location.state.orgName}
            />
          </table>
        </div>

        <div className="col-sm-3">
          <table className="table">
            <thead className="thead-dark">
                <th>
                2 Weekends Out (
                {moment()
                  .day(21)
                  .format("MM/DD")}
                )
                </th>
              </thead>

            <WeekendPlanPrint
              date={moment()
                .day(21)
                .format("YYYY-MM-DD")}
              permissions={this.props.location.state.permissions}
              orgName={this.props.location.state.orgName}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default HomeMatrixPrint;
