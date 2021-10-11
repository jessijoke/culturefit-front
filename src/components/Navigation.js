import React, { Component } from 'react';
import { connect } from 'react-redux';
import './navigation.css'

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
        if (this.globalState != null && this.globalState != undefined) {
            this.setState({
                isLoggedIn: true,
                name: this.globalState.name
            })
            console.log(this.globalState)
        } 
    }
    
    render() {
        return(
            
            <nav className="navBarFlexContainer">
                <a href="/"><div className="navLogo"><span className="cultureLogo">culture</span><span className="fitLogo">Fit</span></div></a>
                <div className="navBarInnerContainer">

                {
                    !this.props.loginReducer.loggedIn ?
                    <div className="navElement">
                        
                        <a href="/#/signup">Sign up</a>
                        <span className="signupInDivider"> | </span>
                        <a href="/#/signin">Sign in</a>
                    </div>
                    :
                    <div className="navElement">
                        <span className="signupInDivider">Welcome { this.props.loginReducer.name.userName } </span>
                        <span className="signupInDivider"> | </span>
                        <a href="/#/signin">Sign out</a>
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