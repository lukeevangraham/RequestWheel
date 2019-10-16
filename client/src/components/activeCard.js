import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function ActiveCard(props) {
  console.log(props);

  return (
    <div className="text-left p-1">
      {console.log("eventName: ", props.eventName)}
      {props.eventName} <i className="ml-2 far fa-edit"></i>
      <i
        className=" ml-2 fas fa-trash"
        onClick={() => {
          if (window.confirm("Are you sure you wish to delete this request?"))
            props.onClick(props.id);
        }}
      ></i>
    </div>
  );
}

export default ActiveCard;
