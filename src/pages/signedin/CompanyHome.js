import React, { Component } from 'react';
import SubNav from './components/SubNav'

class CompanyHome extends Component {
    constructor(props) {
        super();
        this.state = {
        currentView: "createQuiz"
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

    render() {
        return(
            <div className="companyHome">
                <SubNav cwBtn={this.createQuizBtn} vwqBtn={this.viewCompletedQuizzesBtn}/>
                {
                    this.state.currentView === "createQuiz" ? 
                    <div>Create Quiz</div>
                    :
                    <div>View Completed Quizzes</div>
                }
            </div>
        )
    }
}

export default CompanyHome;