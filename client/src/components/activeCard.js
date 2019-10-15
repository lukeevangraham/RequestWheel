import React from "react";

function ActiveCard(props) {
  console.log(props.requests);
  return (
    <div>
      <h4>Active Requests</h4>
      {props.requests.map(request => {
        console.log("eventName: ", request.eventName)
        return (
          <p>{request.eventName}</p>
        )
      })}

       
    </div>
  );
}

export default ActiveCard;
