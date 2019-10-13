import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    const imageStyle = {
      width: 400
    };

    const loggedIn = this.props.loggedIn;
    console.log("home render, props: ");
    console.log(this.props.loggedIn);

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <p>It's good to be home</p>
            <img
              style={imageStyle}
              src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg"
            />
          </div>
        </div>

{loggedIn ? (
  <div className="row mt-3">
            <div className="col">
          <Link role="button" className="btn btn-primary" to="/submit-request">Submit a request</Link>
            </div>
        </div>
) : (
<div></div>
)}

        
      </div>
    );
  }
}
export default Home;
