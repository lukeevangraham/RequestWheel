import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    const imageStyle = {
      width: 400
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <p>It's good to be home</p>
            <img
              style={imageStyle}
              src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg"
            />
          </div>
        </div>
        <div className="row">
            <div className="col">
          <button>Submit a request</button>
            </div>
        </div>
      </div>
    );
  }
}
export default Home;
