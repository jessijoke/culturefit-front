import React, { Component } from 'react';
import './subnav.css';

class SubNav extends Component {
    render() {
        return(
            <div className="subnav">
                <div className="subnavFlex">
                    <div>create survey</div>
                    <div>|</div> 
                    <div>completed surveys</div>
                </div>
            </div>
        )
    }
}

export default SubNav;