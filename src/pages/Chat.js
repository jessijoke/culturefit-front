import React, { Component } from 'react'
import { connect } from "react-redux";
import Navigation from "../components/Navigation";

class Chat extends Component {
    constructor(props) {
        super()
        this.state={

        }
    }
    render() {
        return(
            <div>
            <Navigation />
            
            Test
            </div>
        )
    }
}

const MSP = (globalState) => {
    //debugger
    console.log('FROM CONNECT', globalState)
    return globalState
}

const MDP = (dispatch) => {
    return {
        //auth: (name, usertype) => dispatch(loginAction(name, usertype))
    }
  }

export default connect(MSP, MDP)(Chat);
