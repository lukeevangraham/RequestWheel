import React, { Component } from "react";

class SubmitRequest extends Component {
  // setting the component's initial state
  state = {
    name: "",
    phone: "",
    email: "",
    eventName: "",
    submittedDate: "",
    requestDueDate: "",
    approver: "",
    approverEmail: "",
    letterFlyer: "",
    halfSheetflyer: "",
    quarterSheetFlyer: "",
    tvGraphic: "",
    tabloidPoster: "",
    mediumPoster: "",
    largePoster: "",
    fourByEightBanner: "",
    otherDesignFormat: "",
    plainCopyPaper: "",
    coloredCopyPaper: "",
    color: "",
    hammermillPaper: "",
    cardstock: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Submit a Communications Request</h2>
            <form className="form text-left">
              <div className="form-group row">
                <label for="name" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    value={this.state.name}
                    name="name"
                    id="name"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="phone" className="col-sm-2 col-form-label">
                  Phone
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    value={this.state.phone}
                    name="phone"
                    id="phone"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="email" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    value={this.state.email}
                    name="email"
                    id="email"
                    onChange={this.handleInputChange}
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="eventName" className="col-sm-2 col-form-label">
                  What is this for?
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    value={this.state.eventName}
                    name="eventName"
                    id="eventName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Event name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="requestDueDate" className="col-sm-2 col-form-label">
                  Request Due Date
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    value={this.state.requestDueDate}
                    name="requestDueDate"
                    id="requestDueDate"
                    onChange={this.handleInputChange}
                    type="date"
                    placeholder="Due Date"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="approver" className="col-sm-2 col-form-label">
                  Final Proof Approver
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    value={this.state.approver}
                    name="approver"
                    id="approver"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Final proof approved by"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="approverEmail" className="col-sm-2 col-form-label">
                  Final Proof Email Info
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    value={this.state.approverEmail}
                    name="approverEmail"
                    id="approverEmail"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Final proof email address"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-2">Printed/Design Size</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.letterFlyer}
                      name="letterFlyer"
                      id="letterFlyer"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="letterFlyer">
                      8.5" x 11" Flyer
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.halfSheetFlyer}
                      name="halfSheetFlyer"
                      id="halfSheetFlyer"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="halfSheetFlyer">
                      1/2 Sheet Flyer
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.quarterSheetFlyer}
                      name="quarterSheetFlyer"
                      id="quarterSheetFlyer"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="quarterSheetFlyer">
                      1/4 Sheet Flyer
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.tvGraphic}
                      name="tvGraphic"
                      id="tvGraphic"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="tvGraphic">
                      TV Graphic
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.tabloidPoster}
                      name="tabloidPoster"
                      id="tabloidPoster"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="tabloidPoster">
                      11" x 17" Poster
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.mediumPoster}
                      name="mediumPoster"
                      id="mediumPoster"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="mediumPoster">
                      18" x 24" Poster $
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.largePoster}
                      name="largePoster"
                      id="largePoster"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="largePoster">
                      24" x 36" Poster $
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.fourByEightBanner}
                      name="fourByEightBanner"
                      id="fourByEightBanner"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="fourByEightBanner">
                      4' x 8' Banner
                    </label>
                  </div>

                  <div className="form-group mt-1">
                    <label for="otherDesignFormat">Other:</label>
                    <input
                      type="text"
                      className="form-control mt-n1"
                      id="otherDesignFormat"
                      value={this.state.otherDesignFormat}
                      name="otherDesignFormat"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-2">Material</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.plainCopyPaper}
                      name="plainCopyPaper"
                      id="plainCopyPaper"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="plainCopyPaper">
                      Plain Copy Paper
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.coloredCopyPaper}
                      name="coloredCopyPaper"
                      id="coloredCopyPaper"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="coloredCopyPaper">
                      Colored Copy Paper
                    </label>

                    <div className="form-group mt-1 mb-1">
                      <label for="color">Color:</label>
                      <input
                        type="text"
                        className="form-control mt-n1"
                        id="color"
                        value={this.state.color}
                        name="clor"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.hammermillPaper}
                      name="hammermillPaper"
                      id="hammermillPaper"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="hammermillPaper">
                      Hammermill Paper $
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      value={this.state.cardstock}
                      name="cardstock"
                      id="cardstock"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" for="cardstock">
                      Cardstock
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitRequest;
