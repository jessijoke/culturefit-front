import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return(
            <div>
                <div><a href="/">Home</a></div>
                <div><a href="/signup">Signup</a></div>
                <div><a href="/login">Login</a></div>
            </div>
        )
    }
}