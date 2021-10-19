import React, { Component } from "react";
import CompanyHome from './signedin/CompanyHome';
import JobSeekersHome from './signedin/JobSeekersHome'

class HomeLoggedIn extends Component {
  render() {
    return (
      <>
        {this.props.userType === "job_seeker" ? (
            <JobSeekersHome />
        ) : (
          <CompanyHome />
        )}
      </>
    );
  }
}

export default HomeLoggedIn;
