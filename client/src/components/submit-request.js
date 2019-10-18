import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios"
import moment from "moment";

const Checkbox = ({checked}) => (
  <div>
    <input type="checkbox" checked={checked} />
  </div>
);

Checkbox.defaultProps = {
  checked: false
};

class SubmitRequest extends Component {
  // setting the component's initial state
  state = {
    // name: "",
    // phone: "",
    // email: "",
    eventName: "",
    submittedDate: "",
    requestDueDate: "",
    approver: "",
    approverEmail: "",
    letterFlyer: false,
    halfSheetFlyer: false,
    quarterSheetFlyer: false,
    tvGraphic: false,
    tabloidPoster: false,
    mediumPoster: false,
    largePoster: false,
    fourByEightBanner: false,
    otherDesignFormat: "",
    plainCopyPaper: false,
    coloredCopyPaper: false,
    color: "",
    hammermillPaper: false,
    cardstock: false,
    collate: false,
    stack: false,
    holePunch: false,
    staple: false,
    forNewsletter: false,
    forAnnVideo: false,
    forTVScreens: false,
    forConnectionCard: false,
    body: "",
    quantity: ""
  };

  handleInputChange = event => {
    const target = event.target;
    console.log("target: ", target)
    // Getting the value and name of the input which triggered the change
    let value = target.type === 'checkbox' ? target.checked :
    target.value;
    const name = event.target.name;

    console.log("name: ", name)
    console.log("value: ", value)

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    // this.setState({
    //   email: "",
    //   password: ""
    // });

    console.log("request-submit-form, eventName: ");
    console.log(this.state.letterFlyer);
    //request to server here
    axios.post('/requests', {
    // name: this.state.name,
    // phone: this.state.phone,
    email: this.props.email,
    eventName: this.state.eventName,
    submittedDate: moment().format("YYYY-MM-DD"),
    requestDueDate: this.state.requestDueDate,
    approver: this.state.approver,
    approverEmail: this.state.approverEmail,
    letterFlyer: this.state.letterFlyer,
    halfSheetFlyer: this.state.halfSheetFlyer,
    quarterSheetFlyer: this.state.quarterSheetFlyer,
    tvGraphic: this.state.tvGraphic,
    tabloidPoster: this.state.tabloidPoster,
    mediumPoster: this.state.mediumPoster,
    largePoster: this.state.largePoster,
    fourByEightBanner: this.state.fourByEightBanner,
    otherDesignFormat: this.state.otherDesignFormat,
    plainCopyPaper: this.state.plainCopyPaper,
    coloredCopyPaper: this.state.coloredCopyPaper,
    color: this.state.color,
    hammermillPaper: this.state.hammermillPaper,
    cardstock: this.state.cardstock,
    collate: this.state.collate,
    stack: this.state.stack,
    holePunch: this.state.holePunch,
    staple: this.state.staple,
    forNewsletter: this.state.forNewsletter,
    forAnnVideo: this.state.forAnnVideo,
    forTVScreens: this.state.forTVScreens,
    forConnectionCard: this.state.forConnectionCard,
    body: this.state.body,
    quantity: this.state.quantity
    })
    .then(response => {
      console.log(response)
      if (response.data) {
        console.log('successful post')
        alert("Form successfully submited!")
        this.setState({
          redirectTo: '/login'
        })
      } else {
        console.log('Requst-submit error');
      }
    }).catch(error => {
      console.log('Requst-submit server error: ')
      console.log(error);
    })
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.reDirectTo }} />
    } else {
    return (
      <div className="container pt-4">
        <div className="row mb-5">
          <div className="col">
            <h2 className="mb-5 text-center">Submit a Communications Request</h2>
            <form className="form text-left">

              <div className="form-group row">
                <label htmlFor="eventName" className="col-sm-2 col-form-label">
                  Event Name
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
                    aria-describedby="eventHelp"
                  />
                  <small id="eventHelp" className="form-text text-muted">What is this for?</small>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="requestDueDate" className="col-sm-2 col-form-label">
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
                <label htmlFor="approver" className="col-sm-2 col-form-label">
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
                <label htmlFor="approverEmail" className="col-sm-2 col-form-label">
                  Final Proof Email Info
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    value={this.state.approverEmail}
                    name="approverEmail"
                    id="approverEmail"
                    onChange={this.handleInputChange}
                    type="email"
                    placeholder="Final proof email address"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-2">Printed/Design Size</div>
                <div className="col-sm-10">

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      defaultChecked={false}
                      checked={this.state.letterFlyer}
                      name="letterFlyer"
                      id="letterFlyer"
                      onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="letterFlyer">
                      8.5" x 11" Flyer
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.halfSheetFlyer}
                      name="halfSheetFlyer"
                      id="halfSheetFlyer"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="halfSheetFlyer">
                      1/2 Sheet Flyer
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.quarterSheetFlyer}
                      name="quarterSheetFlyer"
                      id="quarterSheetFlyer"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="quarterSheetFlyer">
                      1/4 Sheet Flyer
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.tvGraphic}
                      name="tvGraphic"
                      id="tvGraphic"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="tvGraphic">
                      TV Graphic
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.tabloidPoster}
                      name="tabloidPoster"
                      id="tabloidPoster"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="tabloidPoster">
                      11" x 17" Poster
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.mediumPoster}
                      name="mediumPoster"
                      id="mediumPoster"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="mediumPoster">
                      18" x 24" Poster $
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.largePoster}
                      name="largePoster"
                      id="largePoster"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="largePoster">
                      24" x 36" Poster $
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.fourByEightBanner}
                      name="fourByEightBanner"
                      id="fourByEightBanner"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="fourByEightBanner">
                      4' x 8' Banner
                    </label>
                  </div>

                  <div className="form-group mt-1">
                    <label htmlFor="otherDesignFormat">Other:</label>
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
                      checked={this.state.plainCopyPaper}
                      name="plainCopyPaper"
                      id="plainCopyPaper"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="plainCopyPaper">
                      Plain Copy Paper
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.coloredCopyPaper}
                      name="coloredCopyPaper"
                      id="coloredCopyPaper"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="coloredCopyPaper">
                      Colored Copy Paper
                    </label>

                    <div className="form-group mt-1 mb-1">
                      <label htmlFor="color">Color:</label>
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
                      checked={this.state.hammermillPaper}
                      name="hammermillPaper"
                      id="hammermillPaper"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="hammermillPaper">
                      Hammermill Paper $
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.cardstock}
                      name="cardstock"
                      id="cardstock"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="cardstock">
                      Cardstock
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-2">Other</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.collate}
                      name="collate"
                      id="collate"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="collate">
                      Collate
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.stack}
                      name="stack"
                      id="stack"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="stack">
                      Stack
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.holePunch}
                      name="holePunch"
                      id="holePunch"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="holePunch">
                      Hole Punch
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.staple}
                      name="staple"
                      id="staple"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="staple">
                      Staple
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-2">Advertise in</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.forNewsletter}
                      name="forNewsletter"
                      id="forNewsletter"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="forNewsletter">
                      Newsletter
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.forAnnVideo}
                      name="forAnnVideo"
                      id="forAnnVideo"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="forAnnVideo">
                      Announcement Video
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.forTVScreens}
                      name="forTVScreens"
                      id="forTVScreens"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="forTVScreens">
                      TV Screens
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={this.state.forConnectionCard}
                      name="forConnectionCard"
                      id="forConnectionCard"
                      onChange={this.handleInputChange}
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="forConnectionCard">
                      Connection Card
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group-row">
                <label htmlFor="body" className="col-sm-2 col-form-label align-top">
                  Body*
                </label>

                <textarea
                  className="col-sm-10 p-1 form-control"
                  style={{ display: "inline" }}
                  value={this.state.body}
                  name="body"
                  rows="12"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Body"
                  
                />
              </div>

              <div className="form-group row">
                <label htmlFor="quantity" className="col-sm-2 col-form-label">
                  Quantity
                </label>
                <div className="col-sm-3 p-2">
                  <input
                    className="form-control"
                    value={this.state.quantity}
                    name="quantity"
                    id="quantity"
                    onChange={this.handleInputChange}
                    type="number"
                    min="1"
                    placeholder="Quantity"
                    required
                  />
                </div>
              </div>
              <p>* indicates required field</p>

              <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
}

export default SubmitRequest;
