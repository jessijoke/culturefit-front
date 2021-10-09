import React, { Component } from 'react';
import './navigation.css'

export default class Navigation extends Component {
    render() {
        return(
            <nav className="navBarFlexContainer">
            <a href="/#/"><div className="navLogo"><span className="cultureLogo">culture</span><span className="fitLogo">Fit</span></div></a>
                <div className="navBarInnerContainer">
                    
                    <div className="navElement">
                        <a href="/#/signup">Sign up</a>
                        <span className="signupInDivider"> | </span>
                        <a href="/#/signin">Sign in</a>
                    </div>
                    
                </div>
            </nav>
        )
    }
}

/*
//In order to test on github pages links must look like /culturefit-front/#/
*/