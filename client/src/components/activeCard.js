import React from "react";
import { Link } from "react-router-dom";

function ActiveCard(props) {

  return (
      <li className="list-group-item text-left" key={props.id}>
    <Link to={`/edit-request/${props.id}`} className="p-0">
        {props.eventName}
          <i className="ml-2 far fa-edit"></i>
        </Link>
        <Link to="/">
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
  );
}

export default ActiveCard;
