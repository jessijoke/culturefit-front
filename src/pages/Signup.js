import React, { Component } from 'react';
import Navigation from '../components/Navigation';


export default class Signup extends Component {
  render() {
      return(
          <div>
          <Navigation />
          <h1>Sign Up</h1>
          <form>
            <label>Username</label><br />
            <input type="text" name="name"/><br />

            <label>Email</label><br />
            <input type="text" name="name"/><br />

            <label>Account Type</label><br />
            <input type="radio" id="company" name="user_type" value="company" />
            <label for="company">Company</label>
            <input type="radio" id="job_seeker" name="user_type" value="job_seeker" />
            <label for="job_seeker">Job Seeker</label>
            
            <br />

            <label>Password</label><br />
            <input type="password" name="password"/><br />

            <label>Confirm Password</label><br />
            <input type="password" name="password"/><br />

            <input type="submit" value="Sign Up" className="submitButton"/>
          </form>
          </div>
      )
  }  
} 