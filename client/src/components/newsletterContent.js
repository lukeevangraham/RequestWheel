import React from "react";

function NewsletterContent(props) {
  console.log(props);


  return (
<div className="container mt-4">
  <h2 className="text-center">Assembeled Newsletter Content</h2>
  <hr className="mb-5" />
    {props.location.state.newsletterRequests.map(req => {
      if (req.forNewsletter  && req.approved) {
        return (
            <div>
            <h3>{req.eventName}</h3>
            <p style={{ whiteSpace: "pre-wrap" }}>{req.body}</p>
            </div>
        )
      }
    })
    }
</div>
  )
}
export default NewsletterContent;
