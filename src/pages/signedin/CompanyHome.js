import React, { Component } from 'react';
import SubNav from './components/SubNav'
import './company.css'

class CompanyHome extends Component {
    constructor(props) {
        super();
        this.state = {
            currentView: "createQuiz",
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

    render() {
        const quizData = this.state.questions.map((quest, index) => {
            return (
                <div key={index}>
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
                            <button className="submitBtn">Submit Quiz</button> 
                        </div>
                    </div>
                    :
                    <div>View Completed Quizzes</div>
                }
            </div>
        )
    }
}

export default CompanyHome;