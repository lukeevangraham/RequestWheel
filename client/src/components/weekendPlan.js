import React, { Component } from "react";
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
      console.log("WEEKEND PLAN PROPS: ", this.props.date)
    console.log("Home matrix is here!")
    Promise.all([
      Axios.get(
        "/requests/annVid/" +
          moment(this.props.date)
            .format("YYYY-MM-DD")
      ),
      Axios.get(
        "/requests/connectionCard/" +
          moment(this.props.date)
            .format("YYYY-MM-DD")
      ),
      Axios.get(
        "/requests/tvScreens/" +
          moment(this.props.date)
            .format("YYYY-MM-DD")
      ),
      Axios.get(
        "/requests/newsletter/" +
          moment(this.props.date)
            .format("YYYY-MM-DD")
      ),
      Axios.get(
        "/requests/other/" +
          moment(this.props.date)
            .format("YYYY-MM-DD")
      )
    ]).then(resultArray => {
      console.log("PROMISE RESULT: ", resultArray)
      this.setState({
        ...this.state,
        annVideoRequests: resultArray[0].data,
        connectionCardRequests: resultArray[1].data,
        tvScreensRequests: resultArray[2].data,
        newsletterRequests: resultArray[3].data,
        otherRequests: resultArray[4].data
      });
      console.log("state: ");
      console.log(this.state);
    });
    // this.getRequests(moment().day(0).format("YYYY-MM-DD"))
  }

  render() {
      return (
          <div>
          <div className="card-header bg-gray-300 text-center">
            Announcement Video
          </div>
          <ul className="list-group list-group-flush">
            {this.state.annVideoRequests.map(request => {
              {/* console.log("Request: ", request.annVideoDates); */}
              return <li className="list-group-item">{request.eventName}</li>;
            })}
          </ul>

          <div className="card-header bg-gray-300 text-center">
            Connection Card
          </div>
          <ul className="list-group list-group-flush">
            {this.state.connectionCardRequests.map(request => {
              return <li className="list-group-item">{request.eventName}</li>;
            })}
          </ul>
          <div className="card-header bg-gray-300 text-center">
            Newsletter
          </div>
          <ul className="list-group list-group-flush">
            {this.state.newsletterRequests.map(request => {
              return <li className="list-group-item">{request.eventName}</li>;
            })}
          </ul>
          <div className="card-header bg-gray-300 text-center">
            TV Screens
          </div>
          <ul className="list-group list-group-flush">
            {this.state.tvScreensRequests.map(request => {
              return <li className="list-group-item">{request.eventName}</li>;
            })}
          </ul>
          <div className="card-header bg-gray-300 text-center">
            Other
          </div>
          <ul className="list-group list-group-flush">
            {this.state.otherRequests.map(request => {
              return <li className="list-group-item">{request.eventName}</li>;
            })}
          </ul>
          </div>
      )
  }
}

export default WeekendPlan