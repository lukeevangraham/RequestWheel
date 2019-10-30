import React, { Component } from "react";
import { Link } from "react-router-dom";

function RecentSubmissions(props) {

    // console.log("TEN RECENT: ", props.tenRecent)

  return <div>
      {props.tenRecent.map(request => {
          {/* console.log("REQUEST: ", request) */}
          return (
          <Link to={`/edit-request/${request.id}`}><p>{request.eventName} by {request.email}</p></Link>

          )
      })}
  </div>;
}

export default RecentSubmissions;
