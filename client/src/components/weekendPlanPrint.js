import React, { Component } from "react";
import moment from "moment";
import Axios from "axios";
import "../components/styles/weekendPlanPrint.css";

class WeekendPlanPrint extends Component {
  state = {
    annVideoRequests: [],
    connectionCardRequests: [],
    newsletterRequests: [],
    tvScreensRequests: [],
    otherRequests: []
  };

  componentDidMount() {
    // console.log("WEEKEND PLAN PRINT PROPS: ", this.props);
    Promise.all([
      Axios.get(
        "/requests/annVid/" +
          moment(this.props.date).format("YYYY-MM-DD") +
          "&" +
          this.props.orgName
      ),
      Axios.get(
        "/requests/connectionCard/" +
          moment(this.props.date).format("YYYY-MM-DD") +
          "&" +
          this.props.orgName
      ),
      Axios.get(
        "/requests/tvScreens/" +
          moment(this.props.date).format("YYYY-MM-DD") +
          "&" +
          this.props.orgName
      ),
      Axios.get(
        "/requests/newsletter/" +
          moment(this.props.date).format("YYYY-MM-DD") +
          "&" +
          this.props.orgName
      ),
      Axios.get(
        "/requests/other/" +
          moment(this.props.date).format("YYYY-MM-DD") +
          "&" +
          this.props.orgName
      )
    ]).then(resultArray => {
      // console.log("PROMISE RESULT: ", resultArray);
      this.setState({
        ...this.state,
        annVideoRequests: resultArray[0].data,
        connectionCardRequests: resultArray[1].data,
        tvScreensRequests: resultArray[2].data,
        newsletterRequests: resultArray[3].data,
        otherRequests: resultArray[4].data
      });
      // console.log("state: ");
      // console.log(this.state);
    });
    // this.getRequests(moment().day(0).format("YYYY-MM-DD"))
  }

  render() {
    return (
      <>
        <thead className="thead-dark">
          <tr>
            <th>Announcement Video</th>
          </tr>
        </thead>

        <tbody>
          {this.state.annVideoRequests.map(request => {
            if (request.forAnnVideo && request.approved) {
              return (
                <tr key={request.id.toString()}>
                  <th className="text-dark">{request.eventName}</th>
                </tr>
              );
            } else return undefined;
          })}
        </tbody>

        <thead className="thead-dark">
          <tr>
            <th>Connection Card</th>
          </tr>
        </thead>

        <tbody>
          {this.state.connectionCardRequests.map(request => {
            if (request.forConnectionCard && request.approved) {
              return (
                <tr key={request.id}>
                  <th className="text-dark">{request.eventName}</th>
                </tr>
              );
            } else return null;
          })}
        </tbody>

        <thead className="thead-dark">
          <tr>
            <th>Newsletter</th>
          </tr>
        </thead>

        <tbody>
          {this.state.newsletterRequests.map(request => {
            if (request.forNewsletter && request.approved) {
              return (
                <tr key={request.id}>
                  <th className="text-dark">{request.eventName}</th>
                </tr>
              );
            } else return null;
          })}
        </tbody>

        <thead className="thead-dark">
          <tr>
            <th>TV Screens</th>
          </tr>
        </thead>

        <tbody>
          {this.state.tvScreensRequests.map(request => {
            if (request.forTVScreens && request.approved) {
              return (
                <tr key={request.id}>
                  <th className="text-dark">{request.eventName}</th>
                </tr>
              );
            } else return null;
          })}
        </tbody>

        <thead className="thead-dark">
          <tr>
            <th>Other</th>
          </tr>
        </thead>

        <tbody>
          {this.state.otherRequests.map(request => {
            if (
              request.letterFlyer ||
              request.halfSheetFlyer ||
              request.quarterSheetFlyer ||
              request.tvGraphic ||
              request.tabloidPoster ||
              request.mediumPoster ||
              request.largePoster ||
              request.fourByEightBanner ||
              (request.otherDesignFormat && request.approved)
            ) {
              return (
                <tr key={request.id}>
                  <th className="text-dark">{request.eventName}</th>
                </tr>
              );
            } else return null;
          })}
        </tbody>
      </>
    );
  }
}

export default WeekendPlanPrint;
