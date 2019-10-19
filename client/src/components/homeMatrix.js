import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import moment from "moment";
import Axios from "axios";

class HomeMatrix extends Component {
state = {
    firstRequests: []
}

componentDidMount () {
    this.getRequests(moment().day(0).format("YYYY-MM-DD"))
}

getRequests(date) {
    console.log("Date: ", date)
Axios.get("/requests/date/" +date).then(response => {
    console.log("response: ")
    console.log(response)
})
}

render() {
    return (
        <div className="row">
            <div className="col-sm-4 text-center">Last Weekend</div>
            <div className="col-sm-4 text-center">This Weekend</div>
            <div className="col-sm-4 text-center">Next Weekend</div>
        </div>
    )
}

}

export default HomeMatrix