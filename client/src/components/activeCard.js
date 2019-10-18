import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function ActiveCard(props) {
  console.log(props);

  return (
    <Link to={`/edit-request/${props.id}`} className="list-group-item p-0">
      <li className="list-group-item text-left">
        {console.log("eventName: ", props.eventName)}
        {props.eventName}
        <Link to={`/edit-request/${props.id}`}>
          <i className="ml-2 far fa-edit"></i>
        </Link>
        <Link>
        <i
          style={{ cursor: "pointer" }}
          className=" ml-2 fas fa-trash"
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this request?"))
              props.onClick(props.id);
          }}
        ></i>
        </Link>
      </li>
    </Link>
  );
}

export default ActiveCard;