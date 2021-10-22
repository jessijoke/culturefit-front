import React, { Component } from 'react';
import { connect } from "react-redux";
import UserQuiz from './UserQuiz'
import './userquiz.css';


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

    handleClick = (quizID) => (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.setState({
            quizId: quizID.id,
            page: "quiz"
        })
    }

    backButton = () => (event) => {
        //event.preventDefault();
        console.log("change")
        this.setState({
            page: "quizzes"
        })
    }

    render() {
        const allQuizzes = Object.entries(this.state.quizzes).map(([id,quizName])=>{
            return (
                <div className="quizLinks">
                
                <a href="/" onClick={this.handleClick({id})}>
                <div className="quizLink">
                        {quizName.toString()}
                    </div></a>
                
                </div>
            );
          })

        return(
            <div className="allQuizzes">
                
                {this.state.page === "quizzes" ? 
                <div className="quizNames">
                    <div className="selectQuiz">Select a Quiz:</div>
                    {allQuizzes}
                </div>
                 
                :
                <UserQuiz backBtn={this.backButton} currentQuiz={this.state.quizId}/>
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