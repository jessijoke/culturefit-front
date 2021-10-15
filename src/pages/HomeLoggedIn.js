import React, { Component } from "react";

class HomeLoggedIn extends Component {
  render() {
    return (
      <>
        {this.props.userType === "job_seeker" ? (
          <div className="secondSectionOverlap">
            Pretty much the same thing but now you are logged in as a Job Seeker
          </div>
        ) : (
          <div className="secondSectionOverlap">
            Pretty much the same thing but now you are logged in as a Company
          </div>
        )}
      </>
    );
  }
}

export default HomeLoggedIn;
