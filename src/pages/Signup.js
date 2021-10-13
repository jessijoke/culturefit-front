import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { connect } from 'react-redux';
import './signupLogin.css';
import { loginAction } from '../actions/loginAction'


class Signup extends Component {
    constructor(props) {
        super()
        this.state = {
            name: null,
            email: null,
            user_type: null,
            password: null,
            confirmpass: null,
            errorMessage: null,
            signupError: null
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value}, () => {
            this.passwordsMatchState()
            console.log(this.state)
        }
        )
    }

    passwordsMatchState = () => {
        console.log(this.state.password !== this.state.confirmpass)
        if (this.passwordsMatch()) {
            this.setState({ signupError: <div style={{color: "red"}}>*Passwords must match to continue</div> })
        } else {
            this.setState({ signupError: null })
        }
    }

    passwordsMatch = () => this.state.password !== this.state.confirmpass

    /*
    const mapStateToProps = state => ({
        ...state
       })*/

    handleSubmit = (e) => {
        e.preventDefault()
        if (
            this.state.name !== null && 
            this.state.email !== null &&
            this.state.user_type !== null &&
            this.state.password !== null &&
            !this.passwordsMatch()
            ) {
                console.log("valid entries")
                this.submitToServer()
        } else {
            this.setState({ signupError: <div style={{color: "red"}}>*All fields must be filled out, and passwords must match</div> })
        }
    }

    submitToServer = () => {
        const { history } = this.props;

        return fetch('http://127.0.0.1:3001/users', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                user_type: this.state.user_type
            })
        }).then((response) => response.json())
        .then(data => {
            if (data.user.data.attributes.name === this.state.name) {
                let userName = this.state.name;
                //this.props.dispatch({ type: 'LOGIN', loggedIn: true, un: {userName} })
                this.props.auth(this.state.name)
                localStorage.setItem("token", data.jwt)
                history.push('/');
            }
            
        })
        .catch((error) => {
            this.setState({
                signupError: <div style={{color: "red"}}>Something went wrong</div>
            })
            console.error('Error:', error);
          });
    }

    
  render() {
      return(
          <div className="signupLoginBody">
            <Navigation />
            <div className="signupLogin">
                <h1>Sign Up</h1>
                <div className="signupLoginForm">
                    <form>
                        <div className="signupLoginLavel">Username*</div>
                        <input type="text" className="textInput" name="name" onChange={this.handleChange} label="username" /><br />

                        <div className="signupLoginLavel">Email*</div>
                        <input type="text" className="textInput" name="email" onChange={this.handleChange} label="email" /><br />

                        <div className="signupLoginLavel">Account Type*</div>
                        <input type="radio" id="company" name="user_type" value="company" onChange={this.handleChange}/>
                        <label htmlFor="company">Company</label>
                        <input type="radio" id="job_seeker" name="user_type" value="job_seeker" onChange={this.handleChange}/>
                        <label htmlFor="job_seeker">Job Seeker</label>
                        
                        <br />

                        <div className="signupLoginLavel passwordForm">Password*</div>
                        <input type="password" className="textInput" name="password" onChange={this.handleChange} label="password" /><br />
                        

                        <div className="signupLoginLavel">Confirm Password*</div>
                        <input type="password" className="textInput" name="confirmpass" onChange={this.handleChange} label="confirm password" /><br />
                        { this.state.signupError }

                        <div className="centerSubmitButton">
                            <input type="submit" value="Sign Up" className="submitButton" onClick={this.handleSubmit}/>
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

export default connect(MSP)(Signup);