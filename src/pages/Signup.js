import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { LoginAction } from '../actions/loginAction'

export default class Signup extends Component {
    constructor(props) {
        super()
        this.state = {
            name: "",
            email: "",
            user_type: "",
            password: "",
            confirmpass: "",
            errorMessage: null,
            passmatchError: null
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value}, () => {
            //console.log(this.state);
            this.passwordsMatch()
        }
        )
        
        console.log(this.passwordsMatch);
    }

    passwordsMatch = () => {
        console.log(this.state.password !== this.state.confirmpass)
        if (this.state.password !== this.state.confirmpass) {
            this.setState({ passmatchError: <div style={{color: "red"}}>*Passwords must match to continue</div> })
        } else {
            this.setState({ passmatchError: null })
        }
    }

    /*
    const mapStateToProps = state => ({
        ...state
       })*/



    
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
            <label for="company">Company</label>
            <input type="radio" id="job_seeker" name="user_type" value="job_seeker" onChange={this.handleChange}/>
            <label for="job_seeker">Job Seeker</label>
            
            <br />

            <label>Password</label><br />
            <input type="password" name="password" onChange={this.handleChange}/><br />
            

            <label>Confirm Password</label><br />
            <input type="password" name="confirmpass" onChange={this.handleChange}/><br />
            { this.state.passmatchError }

            <input type="submit" value="Sign Up" className="submitButton"/>
          </form>
          </div>
      )
  }  
} 