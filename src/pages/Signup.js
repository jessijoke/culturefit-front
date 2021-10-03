import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { LoginAction } from '../actions/loginAction'


export default class Signup extends Component {
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
            //console.log(data.user.data.attributes.name)
            if (data.user.data.attributes.name === this.state.name) {
                localStorage.setItem("token", data.jwt)
                //history.push('/survey');
                console.log("WIN")
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
          <div>
          <Navigation />
          <h1>Sign Up</h1>
          <form>
            <label>Username</label><br />
            <input type="text" name="name" onChange={this.handleChange}/><br />

            <label>Email</label><br />
            <input type="text" name="email" onChange={this.handleChange}/><br />

            <label>Account Type</label><br />
            <input type="radio" id="company" name="user_type" value="company" onChange={this.handleChange}/>
            <label htmlFor="company">Company</label>
            <input type="radio" id="job_seeker" name="user_type" value="job_seeker" onChange={this.handleChange}/>
            <label htmlFor="job_seeker">Job Seeker</label>
            
            <br />

            <label>Password</label><br />
            <input type="password" name="password" onChange={this.handleChange}/><br />
            

            <label>Confirm Password</label><br />
            <input type="password" name="confirmpass" onChange={this.handleChange}/><br />
            { this.state.signupError }

            <input type="submit" value="Sign Up" className="submitButton" onClick={this.handleSubmit}/>
          </form>
          </div>
      )
  }  
} 