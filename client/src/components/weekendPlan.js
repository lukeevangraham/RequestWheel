import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Axios from "axios";

class WeekendPlan extends Component {
  state = {
    annVideoRequests: [],
    connectionCardRequests: [],
    newsletterRequests: [],
    tvScreensRequests: [],
    otherRequests: []
  };

  componentDidMount() {
    // console.log("WEEKEND PLAN PROPS: ", this.props);
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
      <div>
        <div className="card-header bg-gray-300 font-weight-bold">
          Announcement Video
        </div>
        <ul className="list-group list-group-flush">
          {this.state.annVideoRequests.map(request => {
            if (request.forAnnVideo && request.approved) {
              return (
                <Link to={`/edit-request/${request.id}`} key={request.id.toString()}>
                  <li className="list-group-item text-left">
                    {request.eventName}
                  </li>
                </Link>
              );
            } else return undefined;
          })}
        </ul>

        <div className="card-header bg-gray-300 font-weight-bold">
          Connection Card
        </div>
        <ul className="list-group list-group-flush">
          {this.state.connectionCardRequests.map(request => {
            if (request.forConnectionCard && request.approved) {
              return (
                <Link to={`/edit-request/${request.id}`} key={request.id.toString()}>
                  <li className="list-group-item">{request.eventName}</li>
                </Link>
              );
            } else return null;
          })}
        </ul>
        <div className="card-header bg-gray-300 font-weight-bold">
          <Link
            to={{
              pathname: "/newsletter-content",
              state: { newsletterRequests: this.state.newsletterRequests }
            }}
          >
            Newsletter
          </Link>
        </div>
        <ul className="list-group list-group-flush">
          {this.state.newsletterRequests.map(request => {
            if (request.forNewsletter && request.approved) {
              return (
                <Link to={`/edit-request/${request.id}`}>
                  <li className="list-group-item">{request.eventName}</li>
                </Link>
              );
            } else return null;
          })}
        </ul>
        <div className="card-header bg-gray-300 font-weight-bold">
          TV Screens
        </div>
        <ul className="list-group list-group-flush">
          {this.state.tvScreensRequests.map(request => {
            if (request.forTVScreens && request.approved) {
              return (
                <Link to={`/edit-request/${request.id}`}>
                  <li className="list-group-item">{request.eventName}</li>
                </Link>
              );
            } else return null;
          })}
        </ul>
        <div className="card-header bg-gray-300 font-weight-bold">Other</div>
        <ul className="list-group list-group-flush">
          {this.state.otherRequests.map(request => {
            if (
              (request.letterFlyer ||
                request.halfSheetFlyer ||
                request.quarterSheetFlyer ||
                request.tvGraphic ||
                request.tabloidPoster ||
                request.mediumPoster ||
                request.largePoster ||
                request.fourByEightBanner ||
                request.otherDesignFormat) &&
              request.approved
            ) {
              return (
                <Link to={`/edit-request/${request.id}`} key={request.id}>
                  <li className="list-group-item">{request.eventName}</li>
                </Link>
              );
            } else return null;
          })}
        </ul>
      </div>
    );
  }
}

export default WeekendPlan;
