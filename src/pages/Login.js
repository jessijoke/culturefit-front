import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import './signupLogin.css';


export default class Login extends Component {
  render() {
      return(
          <div className="signupLoginBody">
            <Navigation />
            <div className="signupLogin">
              <h1>Sign In</h1>
              <div className="signupLoginForm">
                <form>
                <div className="signupLoginLavel">Username*</div>
                  <input type="text" className="textInput" name="name"/><br />

                  <div className="signupLoginLavel passwordForm">Password*</div>
                  <input type="password" className="textInput" name="password"/><br />

                  <div className="centerSubmitButton">
                    <input type="submit" value="Sign in" className="submitButton"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
      )
  }  
} 