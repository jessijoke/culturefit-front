import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import './signupLogin.css';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginAction'



class Login extends Component {
  constructor(props) {
    super()
    this.state = {
        name: null,
        password: null,
        errorMessage: null,
        signupError: null
    }
}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value}, () => {
        console.log(this.state)
    }
    )
}

handleSubmit = (e) => {
    e.preventDefault()
    if (
        this.state.name !== null && 
        this.state.password !== null
        ) {
            console.log("valid entries")
            this.submitToServer()
    } else {
        this.setState({ signupError: <div style={{color: "red"}}>*All fields must be filled out, and passwords must match</div> })
    }
}

submitToServer = () => {
    const { history } = this.props;

    return fetch('http://127.0.0.1:3001/login', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: this.state.name,
            password: this.state.password
        })
    }).then((response) => response.json())
    .then(data => {
        if (data.user.data.attributes.name === this.state.name) {
            //let userName = this.state.name;
            //this.props.dispatch(loginAction(true, this.state.name))
            //this.props.dispatch({ type: 'LOGIN', loggedIn: true, un: {userName} })
            //this.props.auth(loginAction(this.state.name))
            this.props.auth(this.state.name)
            localStorage.setItem("token", data.jwt)
            localStorage.setItem("user", this.state.name)
            history.push('/');
            //console.log("WIN")
        }
        
    })
    .catch((error) => {
        this.setState({
            signupError: <div style={{color: "red"}}>Something went terribly wrong</div>
        })
        console.error('Error:', error);
      });
  }
  
  render() {
      return(
          <div className="signupLoginBody">
            <Navigation />
            <div className="signupLogin">
              <h1>Sign In</h1>
              <div className="signupLoginForm">
                <form>
                <div className="signupLoginLavel">Username*</div>
                  <input type="text" className="textInput" onChange={this.handleChange} name="name"/><br />

                  <div className="signupLoginLavel">Password*</div>
                  <input type="password" className="textInput" onChange={this.handleChange} name="password"/><br />

                  <div className="centerSubmitButton">
                    <input type="submit" value="Sign in" className="submitButton" onClick={this.handleSubmit} />
                  </div>
                </form>
              </div>
            </div>
          </div>
      )
  }  
} 

const MSP = (globalState) => {
  //debugger
  console.log('FROM CONNECT', globalState)
  return globalState
}

const MDP = (dispatch) => {
  return {
      auth: (name) => dispatch(loginAction(name))
  }
}

export default connect(MSP, MDP)(Login);