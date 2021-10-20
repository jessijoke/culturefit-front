import React, { Component } from 'react';
import { connect } from "react-redux";
import UserQuiz from './UserQuiz'


class JobSeekersHome extends Component {
    constructor(props) {
        super();
        this.state = {
        quizzes: {},
        page: "quizzes",
        quizId: null
        };
    }

    componentDidMount() {
        return fetch('http://127.0.0.1:3001/quizzes', {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json())
        .then(data => {
            //console.log(data) 
            let quizzesTemp = {};
            data.forEach(el => quizzesTemp[el.custom_quiz_hash.quiz_id] = el.custom_quiz_hash.name)
            this.setState({ 
                quizzes: quizzesTemp
            })  
                //console.log(quizzesTemp);        
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }

    handleClick = (quizID) => (event) => {
        event.preventDefault();
        //console.log(this.state)
        this.setState({
            quizId: quizID.id,
            page: "quiz"
        })
    }

    render() {
        const allQuizzes = Object.entries(this.state.quizzes).map(([id,quizName])=>{
            return (
                <div>
                <a href="" onClick={this.handleClick({id})}>{quizName.toString()}</a>
                {id} : {quizName.toString()}
                </div>
            );
          })

        return(
            <div className="">
                Pretty much the same thing but now you are logged in as a Job Seeker
                <br />
                {this.state.page === "quizzes" ? 
                allQuizzes 
                :
                <UserQuiz currentQuiz={this.state.quizId}/>
            }
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

export default connect(MSP, MDP)(JobSeekersHome);