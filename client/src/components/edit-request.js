import React, { Component, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/styles/form.css";

const Checkbox = ({ checked }) => (
  <div>
    <input type="checkbox" checked={checked} />
  </div>
);

Checkbox.defaultProps = {
  checked: false
};

class SubmitRequest extends Component {
  componentDidMount() {
    this.getEventById(this.props.match.params.id);
  }

  getEventById(requestId) {
    axios.get("/requests/ind/" + requestId).then(res => {
      const request = res.data;
      this.setState({
        eventName: request.eventName,
        requestDueDate: new Date(moment(request.requestDueDate).format()),
        approver: request.approver,
        approverEmail: request.approverEmail,
        body: request.body,
        cardstock: request.cardstock,
        collate: request.collate,
        color: request.color,
        coloredCopyPaper: request.coloredCopyPaper,
        email: request.email,
        forAnnVideo: request.forAnnVideo,
        forConnectionCard: request.forConnectionCard,
        forNewsletter: request.forNewsletter,
        forTVScreens: request.forTVScreens,
        fourByEightBanner: request.fourByEightBanner,
        halfSheetFlyer: request.halfSheetFlyer,
        hammermillPaper: request.hammermillPaper,
        holePunch: request.holePunch,
        largePoster: request.largePoster,
        letterFlyer: request.letterFlyer,
        mediumPoster: request.mediumPoster,
        otherDesignFormat: request.otherDesignFormat,
        plainCopyPaper: request.plainCopyPaper,
        quantity: request.quantity,
        quarterSheetFlyer: request.quarterSheetFlyer,
        stack: request.stack,
        staple: request.staple,
        tabloidPoster: request.tabloidPoster,
        tvGraphic: request.tvGraphic,
        newsletterDates: request.newsletterDates.map(date =>
          moment(date).isValid() ? new Date(moment(date).format()) : ""
        ),
        annVideoDates: request.annVideoDates.map(date =>
          moment(date).isValid() ? new Date(moment(date).format()) : ""
        ),
        tvScreensDates: request.tvScreensDates.map(date =>
          moment(date).isValid() ? new Date(moment(date).format()) : ""
        ),
        connectionCardDates: request.connectionCardDates.map(date =>
          moment(date).isValid() ? new Date(moment(date).format()) : ""
        ),
        reqId: requestId,
        createdAt: request.createdAt,
        approved: request.approved
      });

      Object.entries(this.state).map(([key, value]) => {
        if (value === true) {
          this.setState({
            [key]: true
          });
          return undefined
        } else return null
      });
    });
  }

  // setting the component's initial state
  state = {
    // name: "",
    // phone: "",
    // email: "",
    eventName: "",
    submittedDate: "",
    requestDueDate: new Date(),
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
    quantity: "",
    newsletterDates: [new Date()],
    annVideoDates: [new Date()],
    tvScreensDates: [new Date()],
    connectionCardDates: [new Date()],
    reqId: "",
    createdAt: "",
    approved: ""
  };

  handleInputChange = event => {
    const target = event.target;
    // Getting the value and name of the input which triggered the change
    let value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      approved: 0,
      [name]: value
    });
  };

  handleChange = date => {
    console.log("DATE: ", date);
    this.setState({
      requestDueDate: date
    });
  };

  // Handling media type arrays
  handleNewsletterDate = i => date => {
    let newsletterDates = [...this.state.newsletterDates];
    newsletterDates[i] = date;
    this.setState({
      newsletterDates: newsletterDates,
      approved: 0
    });
  };

  addNewsletterDate = e => {
    e.preventDefault();
    let dates = this.state.newsletterDates.concat([""]);
    this.setState({
      newsletterDates: dates,
      approved: 0
    });
  };

  deleteNewsletterDate = index => e => {
    this.setState({
      newsletterDates: this.state.newsletterDates.filter((_, i) => i !== index),
      approved: 0
    });
  };
  handleAnnVideoDate = i => date => {
    let annVideoDates = [...this.state.annVideoDates];
    annVideoDates[i] = date;
    this.setState({
      annVideoDates: annVideoDates,
      approved: 0
    });
  };

  addAnnVideoDate = e => {
    e.preventDefault();
    let dates = this.state.annVideoDates.concat([""]);
    this.setState({
      annVideoDates: dates,
      approved: 0
    });
  };

  deleteAnnVideoDate = index => e => {
    this.setState({
      annVideoDates: this.state.annVideoDates.filter((_, i) => i !== index),
      approved: 0
    });
  };
  handletvScreensDate = i => date => {
    let tvScreensDates = [...this.state.tvScreensDates];
    tvScreensDates[i] = date;
    this.setState({
      tvScreensDates: tvScreensDates,
      approved: 0
    });
  };

  addtvScreensDate = e => {
    e.preventDefault();
    let dates = this.state.tvScreensDates.concat([""]);
    this.setState({
      tvScreensDates: dates,
      approved: 0
    });
  };

  deletetvScreensDate = index => e => {
    this.setState({
      tvScreensDates: this.state.tvScreensDates.filter((_, i) => i !== index),
      approved: 0
    });
  };
  handleConnectionCardDate = i => date => {
    let connectionCardDates = [...this.state.connectionCardDates];
    connectionCardDates[i] = date;
    this.setState({
      connectionCardDates: connectionCardDates,
      approved: 0
    });
  };

  addConnectionCardDate = e => {
    e.preventDefault();
    let dates = this.state.connectionCardDates.concat([""]);
    this.setState({
      connectionCardDates: dates,
      approved: 0
    });
  };

  deleteConnectionCardDate = index => e => {
    this.setState({
      connectionCardDates: this.state.connectionCardDates.filter(
        (_, i) => i !== index
      ),
      approved: 0
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

    //request to server here
    axios
      .put("/requests/" + this.state.reqId, {
        // name: this.state.name,
        // phone: this.state.phone,
        // email: this.props.email,
        eventName: this.state.eventName,
        submittedDate: moment().format("YYYY-MM-DD"),
        requestDueDate: moment(this.state.requestDueDate).format("YYYY-MM-DD"),
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
        quantity: this.state.quantity,
        newsletterDates: this.state.newsletterDates.map(date => {
          return moment(date).format("YYYY-MM-DD");
        }),
        annVideoDates: this.state.annVideoDates.map(date => {
          return moment(date).format("YYYY-MM-DD");
        }),
        tvScreensDates: this.state.tvScreensDates.map(date => {
          return moment(date).format("YYYY-MM-DD");
        }),
        connectionCardDates: this.state.connectionCardDates.map(date => {
          return moment(date).format("YYYY-MM-DD");
        }),
        orgName: this.props.orgName,
        id: this.state.reqId,
        approved: this.state.approved
      })
      .then(response => {
        if (response.data) {
          alert("Form successfully edited!");
          this.setState({
            redirectTo: "/login"
          });
        } else {
          console.log("Requst-submit error");
        }
      })
      .catch(error => {
        console.log("Requst-submit server error: ");
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.reDirectTo }} />;
    } else {
      const isWeekendDate = date => {
        const day = date.getDay();
        return day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 5;
      };

      return (
        console.log(this.state),
        <div className="container pt-4">
          <div className="row mb-5">
            <div className="col">
              <h2 className="mb-4 text-center">
                Edit a Communications Request
              </h2>
              <h5>DEADLINES</h5>
              <p className="mb-1">
                <span className="font-weight-bold">
                  Newsletter, Announement Video, Connection Card:{" "}
                </span>
                <br /> Mondays @ 5:00 pm; Two weeks notice
              </p>
              <p className="mb-5">
                <span className="font-weight-bold">
                  Posters, banners, booklets, programs, graphics, etc:{" "}
                </span>
                <br />
                Minimum of three weeks notice <br />
                All content must be submitted two weeks before you need final
                product
              </p>
              <form className="form text-left">
                <div className="form-group row">
                  <label
                    htmlFor="eventSubmitted"
                    className="col-sm-2 col-form-label"
                  >
                    Request Submitted
                  </label>
                  <div className="col-sm-2 d-flex align-items-center">
                    {moment(this.state.createdAt).format("MM/DD/YYYY")}
                  </div>
                  <label htmlFor="requester" className="col-sm-3 col-form-label">by: {this.state.email}</label>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="eventName"
                    className="col-sm-2 col-form-label"
                  >
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
                    <small id="eventHelp" className="form-text text-muted">
                      What is this for?
                    </small>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="requestDueDate"
                    className="col-sm-2 col-form-label"
                  >
                    Request Due Date
                  </label>
                  <div className="col-sm-10">
                    {/* <input
                      className="form-control"
                      value={this.state.requestDueDate}
                      name="requestDueDate"
                      id="requestDueDate"
                      onChange={this.handleInputChange}
                      type="date"
                      placeholder="Due Date"
                    /> */}
                    <DatePicker
                      className="form-control"
                      selected={this.state.requestDueDate}
                      onChange={this.handleChange}
                    />
                    <small id="dueDateHelp" className="form-text text-muted">
                      Two weeks notice for newsletter, announcement video or
                      connection card. Three weeks notice for posters, banner,
                      booklets, etc.
                    </small>
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
                  <label
                    htmlFor="approverEmail"
                    className="col-sm-2 col-form-label"
                  >
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
                      <label
                        className="form-check-label"
                        htmlFor="halfSheetFlyer"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="quarterSheetFlyer"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="tabloidPoster"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="mediumPoster"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="fourByEightBanner"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="plainCopyPaper"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="coloredCopyPaper"
                      >
                        Colored Copy Paper
                      </label>

                      <div className="form-group mt-1 mb-1">
                        <label htmlFor="color">Color:</label>
                        <input
                          type="text"
                          className="form-control mt-n1"
                          id="color"
                          value={this.state.color}
                          name="color"
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
                      <label
                        className="form-check-label"
                        htmlFor="hammermillPaper"
                      >
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
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            checked={this.state.forNewsletter}
                            name="forNewsletter"
                            id="forNewsletter"
                            onChange={this.handleInputChange}
                            type="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="forNewsletter"
                          >
                            Newsletter
                          </label>
                        </div>
                        {this.state.forNewsletter ? (
                          <Fragment>
                            {this.state.newsletterDates.map(
                              (date, index) => (
                                (
                                  <div
                                    className="input-group input-group-sm mb-1 flex-nowrap"
                                    key={index}
                                  >
                                    {/* <input
                                  className="form-control"
                                  type="date"
                                  onChange={this.handleNewsletterDate(index)}
                                  value={date}
                                  placeholder="yyyy-mm-dd"
                                  name="newsletterDates"
                                /> */}
                                    <DatePicker
                                      selected={date}
                                      onChange={this.handleNewsletterDate(
                                        index
                                      )}
                                      filterDate={isWeekendDate}
                                      className="form-control border-right-0 dateCorners"
                                    />
                                    <div className="input-group-append">
                                      <span
                                        className="input-group-text bg-danger text-white smallAppend"
                                        onClick={this.deleteNewsletterDate(
                                          index
                                        )}
                                      >
                                        X
                                      </span>
                                    </div>
                                  </div>
                                )
                              )
                            )}
                            <button
                              className="form-control mb-4"
                              onClick={this.addNewsletterDate}
                            >
                              Add Another Date
                            </button>
                          </Fragment>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="col-lg-3 col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            checked={this.state.forAnnVideo}
                            name="forAnnVideo"
                            id="forAnnVideo"
                            onChange={this.handleInputChange}
                            type="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="forAnnVideo"
                          >
                            Announcement Video
                          </label>
                        </div>

                        {this.state.forAnnVideo ? (
                          <Fragment>
                            {this.state.annVideoDates.map((date, index) => (
                              <span
                              className="input-group input-group-sm mb-1 flex-nowrap"
                                key={index}
                              >
                                {/* <input
                                  className="form-control"
                                  type="date"
                                  onChange={this.handleAnnVideoDate(index)}
                                  value={date}
                                  placeholder="yyyy-mm-dd"
                                /> */}
                                <DatePicker
                                  selected={date}
                                  onChange={this.handleAnnVideoDate(index)}
                                  filterDate={isWeekendDate}
                                  className="form-control border-right-0 dateCorners"
                                />
                                <div className="input-group-append">
                                  <span
                                    className="input-group-text bg-danger text-white smallAppend"
                                    onClick={this.deleteAnnVideoDate(index)}
                                  >
                                    X
                                  </span>
                                </div>
                              </span>
                            ))}
                            <button
                              className="form-control mb-4"
                              onClick={this.addAnnVideoDate}
                            >
                              Add Another Date
                            </button>
                          </Fragment>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="col-lg-3 col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            checked={this.state.forTVScreens}
                            name="forTVScreens"
                            id="forTVScreens"
                            onChange={this.handleInputChange}
                            type="checkbox"
                          />
                          <label
                            className="form-check-label mr-2"
                            htmlFor="forTVScreens"
                          >
                            TV Screens
                          </label>
                        </div>

                        {this.state.forTVScreens ? (
                          <Fragment>
                            {this.state.tvScreensDates.map((date, index) => (
                              <span
                              className="input-group input-group-sm mb-1 flex-nowrap"
                                key={index}
                              >
                                {/* <input
                                  className="form-control"
                                  type="date"
                                  onChange={this.handletvScreensDate(index)}
                                  value={date}
                                  placeholder="yyyy-mm-dd"
                                /> */}
                                <DatePicker
                                  selected={date}
                                  onChange={this.handletvScreensDate(index)}
                                  filterDate={isWeekendDate}
                                  className="form-control border-right-0 dateCorners"
                                />
                                <div className="input-group-append">
                                  <span
                                    className="input-group-text bg-danger text-white smallAppend"
                                    onClick={this.deletetvScreensDate(index)}
                                  >
                                    X
                                  </span>
                                </div>
                              </span>
                            ))}
                            <button
                              className="form-control mb-4"
                              onClick={this.addtvScreensDate}
                            >
                              Add Another Date
                            </button>
                          </Fragment>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="col-lg-3 col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            checked={this.state.forConnectionCard}
                            name="forConnectionCard"
                            id="forConnectionCard"
                            onChange={this.handleInputChange}
                            type="checkbox"
                          />
                          <label
                            className="form-check-label mr-2"
                            htmlFor="forConnectionCard"
                          >
                            Connection Card
                          </label>
                        </div>

                        {this.state.forConnectionCard ? (
                          <Fragment>
                            {this.state.connectionCardDates.map(
                              (date, index) => (
                                <span
                                className="input-group input-group-sm mb-1 flex-nowrap"
                                  key={index}
                                >
                                  {/* <input
                                    className="form-control"
                                    type="date"
                                    onChange={this.handleConnectionCardDate(
                                      index
                                    )}
                                    value={date}
                                    placeholder="yyyy-mm-dd"
                                  /> */}
                                  <DatePicker
                                    selected={date}
                                    onChange={this.handleConnectionCardDate(
                                      index
                                    )}
                                    filterDate={isWeekendDate}
                                    className="form-control border-right-0 dateCorners"
                                  />
                                  <div className="input-group-append">
                                    <span
                                      className="input-group-text bg-danger text-white smallAppend"
                                      onClick={this.deleteConnectionCardDate(
                                        index
                                      )}
                                    >
                                      X
                                    </span>
                                  </div>
                                </span>
                              )
                            )}
                            <button
                              className="form-control mb-4"
                              onClick={this.addConnectionCardDate}
                            >
                              Add Another Date
                            </button>
                          </Fragment>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group-row pt-2">
                  <label
                    htmlFor="body"
                    className="col-sm-2 col-form-label align-top"
                  >
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

                {this.props.permissions === "Administrator"
                  ?  (
                      <div className="form-group row">
                        <div className="col-sm-2">Approval</div>
                        <div className="col-sm-10">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              checked={this.state.approved}
                              name="approved"
                              id="approved"
                              onChange={this.handleInputChange}
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="approved"
                            >
                              Approved
                            </label>
                          </div>
                        </div>
                      </div>
                    )
                  : ""}

                <p>* indicates required field</p>

                <Link to="/">
                  <button className="btn btn-secondary mr-3">Cancel</button>
                </Link>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}
                >
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
