import React, { Component } from 'react';
import { connect } from "react-redux";
import './userquiz.css';

class UserQuiz extends Component {
    constructor(props) {
        super();
        this.state = {
            quizName: "",
            quizData: {}
        };
    }

    componentDidMount() {
        return fetch(`http://127.0.0.1:3001/quizzes/${this.props.currentQuiz}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json())
        .then(data => {
            //console.log(data) 
            
            this.setState({ 
                quizName: data.custom_quiz_hash.name,
                quizData: data.custom_quiz_hash.questions
                //quizzes: quizzesTemp
            })  
            console.log(this.state.quizData)
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }

    render() {
        const quizData = Object.entries(this.state.quizData).map(([k,value])=>{
            return (
                <div className="questionSet">
                    <div>
                    {value.question_name.question}
                    </div>
                    {
                    Object.entries(value.answers).map(([answerKey, answerValue]) => {
                        return <div className="answers">
                        <input type="radio" id={answerValue.answer_name.answer_id} name={value.question_id} value={answerValue.answer_name.answer_id} key={answerValue.answer_name.answer_id}/>
                        {answerValue.answer_name.answer}
                        </div>
                    })}
                </div>
            );
          })


        return(
            <div>
                <div className="quizContainer">
                    <div className="innerQuiz">
                        <button onClick={this.props.backBtn()}>Go Back</button>
                        <div>
                            <h2>{this.state.quizName.toString()}</h2>
                        </div>
                        {quizData}
                        <button className="submit">Submit</button>
                    </div>
                    
                </div>
                
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

export default connect(MSP, MDP)(UserQuiz);