import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import './home.css'

export default class Home extends Component {
  render() {
      return(
          <div>

            <Navigation />

            <div className="gridContainer">

              <div className="firstSection">
                <h1>Find the perfect fit for your company’s culture.</h1>
              </div>

              <div className="secondSection">
                
              </div>
              <div className="secondSectionOverlap">
                DUN DUN DUNNNNN
              </div>

              <div className="thirdSection">
                <h2>Blah blah corporate bullshit blah blah.</h2>
              </div>

              <div className="fourthSection">
                footer
              </div>
            </div>

          </div>
      )
  }  
} 