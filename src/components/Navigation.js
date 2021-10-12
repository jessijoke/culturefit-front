import React, { Component } from 'react';
import { connect } from 'react-redux';
import './navigation.css'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super()
        this.state = {
            isLoggedIn: false,
            name: "",
            navBartitles: ["sign up", "sign in"],
            navBarLinks: ["/#/signup", "/#/signin"]
        }
    }

    loggedInNavbar = () => {
        if (this.globalState !== null && this.globalState !== undefined) {
            this.setState({
                isLoggedIn: true,
                name: this.globalState.name
            })
            console.log(this.globalState)
        } 
    }

    logout = () => {
        const { history } = this.props;
        localStorage. clear();
        this.props.dispatch({ type: 'LOGOUT', loggedIn: false })
    }
    
    render() {
        return(
            
            <nav className="navBarFlexContainer">
                <Link to="/"><div className="navLogo"><span className="cultureLogo">culture</span><span className="fitLogo">Fit</span></div></Link>
                <div className="navBarInnerContainer">

                {
                    !this.props.loginReducer.loggedIn ?
                    <div className="navElement">
                        
                        <Link to="/signup">Sign up</Link>
                        <span className="signupInDivider"> | </span>
                        <Link to="/signin">Sign in</Link>
                    </div>
                    :
                    <div className="navElement">
                        <span className="signupInDivider">Welcome { this.props.loginReducer.name.userName } </span>
                        <span className="signupInDivider"> | </span>
                        <Link onClick={this.logout} to="/">Sign out</Link>
                    </div>
      
                  }
                
                </div>
            </nav>
            
        )
    }
}

const MSP = (globalState) => {
    //debugger
    console.log('FROM CONNECT', globalState)
    return globalState
}

export default connect(MSP)(Navigation);

/*
//In order to test on github pages links must look like /culturefit-front/#/
*/