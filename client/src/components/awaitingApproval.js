import React from "react";
import { Link } from "react-router-dom";

function AwaitingApproval(props) {


    return <div>
    {props.tenRecent.map(request => {
        if (!request.approved) {
        return (
        <Link to={`/edit-request/${request.id}`}><p>{request.eventName} by {request.email}</p></Link>

        )
            
        }
    })}
</div>;
}

export default AwaitingApproval;
