import React from "react";
import { Link } from "react-router-dom";

function AwaitingApproval(props) {


    return <div>
    {props.tenRecent.map(request => {
        if (!request.approved) {
        return (
        <Link to={`/edit-request/${request.id}`} className="list-group-item p-0" key={request.id.toString()}>
        <li className="list-group-item text-left">
            {request.eventName} by {request.email}</li></Link>

        )
            
        } else return null
    })}
</div>;
}

export default AwaitingApproval;
