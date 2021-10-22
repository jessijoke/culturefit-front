import React, { Component } from 'react';
import './subnav.css';

class SubNav extends Component {

    render() {
        return(
            <div className="subnav">
                <div className="subnavFlex">
                    <a href="/" onClick={this.props.cwBtn()}>create survey</a>
                    <div>|</div> 
                    <a href="/" onClick={this.props.vwqBtn()}><div>completed surveys</div></a>
                </div>
            </div>
        )
    }
}

export default SubNav;