import React, { Component } from "react";
import moment from "moment";
import Axios from "axios";

class People extends Component {


  constructor(props) {
    super();
    this.state = {
      usersInOrg: []
    };
  }

  componentDidMount() {
    this.getPeopleInOrg(this.props.orgName);
  }

  getPeopleInOrg(orgName) {
    Axios.get("/user/inOrg/" + this.props.orgName).then(res => {
      const response = res.data;
      this.setState({
        ...this.state,
        usersInOrg: response
      })
    });
  }

  render() {
    return (
      <div className="container">
        <p>Hi there from {this.props.orgName}</p>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Last Login</th>
              <th scope="col">Created On</th>
              <th scope="col">Permissions</th>
            </tr>
          </thead>
          <tbody>
            
        {this.state.usersInOrg.map(user => {
          return(
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{moment(user.updatedAt).format("MM/DD/YY h:mm a")}</td>
              <td>{moment(user.createdAt).format("MM/DD/YY h:mm a")}</td>
              <td>{user.permissions}</td>
            </tr>
          )
        })}


          </tbody>
        </table>



      </div>
    );
  }
}

export default People;
