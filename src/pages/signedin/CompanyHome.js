import React, { Component } from 'react';
import SubNav from './components/SubNav'
import { connect } from "react-redux";
import './company.css'

class CompanyHome extends Component {
    constructor(props) {
        super();
        this.state = {
            currentView: "createQuiz",
            username: props.loginReducer.name,
            quizTitle: "",
            questions: [
                {
                    question: "",
                    answers: [
                        {
                            answer: "",
                            attribute: ""
                        },
                        {
                            answer: "",
                            attribute: ""
                        }
                    ]
                }
            ]
        };
    }

    createQuizBtn = () => (event) => {
        event.preventDefault();
        this.setState({
            currentView: "createQuiz"
        })
    }

    viewCompletedQuizzesBtn = () => (event) => {
        event.preventDefault();
        this.setState({
            currentView: "viewQuizzes"
        })
    }

    addQuestionBtn = () => (event) => {
        event.preventDefault();
        let newQuestion = {
            question: "",
            answers: [
                {
                    answer: "",
                    attribute: ""
                },
                {
                    answer: "",
                    attribute: ""
                }
            ]
        }
        this.setState({
            questions: [...this.state.questions, newQuestion]
        })
    }

    addAnswerBtn = (index) => (event) => {
        event.preventDefault();

        let questions = [...this.state.questions];
        
        let newAnswer = {
            answer: "",
            attribute: ""
        }

        questions[index].answers = [...questions[index].answers, newAnswer]
        console.log(questions[index].answers)

        this.setState({
            questions
        })
       
    }

    questionHandleChange = (index) => (event) => {
        let questions = [...this.state.questions];
        questions[index].question = event.target.value;
        this.setState({
            questions
        }, () => { 
            console.log(this.state);
        })
    }

    answerHandleChange = (qIndex, aIndex) => (event) => {
        let questions = [...this.state.questions];
        questions[qIndex].answers[aIndex] = event.target.value;
        //console.log(questions)
        this.setState({
            questions
        }, () => { 
            console.log(this.state);
        })
    }

    titleHandleChange = () => (event) => {
        this.setState({
            quizTitle: event.target.value
        }, () => {
            console.log(this.state)
        })
    }

    handleSubmit = () => (event) => {
        event.preventDefault();
        console.log("Click")
        return fetch('http://127.0.0.1:3001/quizzes', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                quizTitle: this.state.quizTitle,
                quiz: "test",
                questions: this.state.quizTitle
            })
        }).then((response) => response.json())
        .then(data => {
            console.log(data)
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }

    render() {
        const quizData = this.state.questions.map((quest, index) => {
            return (
                <div key={index}>
                    <div>
                        <div>
                            <label>Quiz Title:</label>
                        </div>
                        <div>
                            <input onChange={this.titleHandleChange()} placeholder="example: Personality Quiz"/>
                        </div>
                    </div>
                    <div>
                        <label>Question:</label>
                    </div>
                    <div>
                        <input onChange={this.questionHandleChange(index)} placeholder="example: 'Which setting would you feel most comfortable in?'"/>
                    </div>
                    
                    {
                        quest.answers.map((answ, aindex) => {
                            return (
                                <div className="answers" key={aindex}> 
                                    <div>
                                        <label>Answer:</label>
                                    </div>
                                    <div>
                                        <input onChange={this.answerHandleChange(index, aindex)} placeholder="example: 'A nerf gun fight'"/>
                                    </div>
                                    <div className="attribute">
                                        <div>
                                            <label>Answer Attribute:</label>
                                        </div>
                                        <div>
                                            <input placeholder="example: 'Outgoing'"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button className="addBtn" onClick={this.addAnswerBtn(index)}>Add Answer</button>
                </div>
            )
        })

        return(
            <div className="companyHome">
                <SubNav cwBtn={this.createQuizBtn} vwqBtn={this.viewCompletedQuizzesBtn}/>
                {
                    this.state.currentView === "createQuiz" ? 
                    <div className="createQuizContainer">
                        <div className="createQuizInner">
                            <h2>Create Quiz</h2>
                            <div>
                            {quizData}
                            <button className="addBtn"  onClick={this.addQuestionBtn()}>Add Question</button>
                            </div>
                            <button onClick={this.handleSubmit()} className="submitBtn">Submit Quiz</button> 
                        </div>
                    </div>
                    :
                    <div>View Completed Quizzes</div>
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

export default connect(MSP, MDP)(CompanyHome);