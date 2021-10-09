import React, { Component } from 'react';
import './navigation.scss'

export default class Navigation extends Component {
    render() {
        return(
            <nav className="navBarFlexContainer">
            <div className="navLogo"><span className="cultureLogo">culture</span><span className="fitLogo">Fit</span></div>
                <div className="navBarInnerContainer">
                    <div className="navElement"><a href="/">Home</a></div>
                    <div className="navElement"><a href="/signup">Signup</a></div>
                    <div className="navElement"><a href="/login">Login</a></div>
                </div>
            </nav>
        )
    }
}