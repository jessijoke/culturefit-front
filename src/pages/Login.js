import React, { Component } from 'react';
import Navigation from '../components/Navigation';


export default class Login extends Component {
  render() {
      return(
          <div>
          <Navigation />
          <h1>Log In</h1>
          <form>
            <label>Username</label><br />
            <input type="text" name="name"/><br />
            <br />

            <label>Password</label><br />
            <input type="password" name="password"/><br />

            <input type="submit" value="Log in" className="submitButton"/>
          </form>
          </div>
      )
  }  
} 