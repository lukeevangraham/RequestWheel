import React from "react";

function NewsletterContent(props) {
  console.log(props.location.state.newsletterRequests);


  return (
<div className="container mt-4">
    {props.location.state.newsletterRequests.map(req => {
        return (
            <div>
            <h3>{req.eventName}</h3>
            <p>{req.body}</p>
            </div>
        )
    })
    }
</div>
  )
}
export default NewsletterContent;
