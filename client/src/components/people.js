import React, { Component } from "react";
import Axios from "axios";

class People extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orgName: this.props.orgName
        }
    }

    getPeopleInOrg(orgName) {
        Axios.get("/user/inOrg/" + orgName).then(res => {
            const response = res.data
            console.log('RESPONSE: ', response)
        })

    }

    render(props) {
        console.log("props: ", props)

        return (
            <div className="container">
                <p>Hi there from {this.props.orgName}</p>
            </div>
        )
    }
}

export default People;