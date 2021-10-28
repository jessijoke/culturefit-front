import React, { Component } from 'react'

class QuizScores extends Component {
    constructor(props){
        super()
        this.state={
            currentQuiz: props.currentQuiz,
            quizScores: []
        }
        
    }

    componentDidMount() {
        return fetch(`http://127.0.0.1:3001/user_attributes/${this.state.currentQuiz}`, {
            method: "get",
            headers: {
                "Access-Control-Allow-Headers": "Authorization",
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                quizScores: data
            })
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }

    render() {
        const quizScores = this.state.quizScores.map((data, index) => {
            return (
                <div key={index}>
                    <div>{data["user"]["name"].toString()}</div>
                    <div></div>
                </div>
            )
        })

        console.log(this.state.currentQuiz)
        return (
            <div className="quizNames">
                <div className="selectQuiz">Test</div>
                <div className="quizLinks">
                {quizScores}
                <button className="addBtn" onClick={this.props.backBtn()}>Back</button>
                </div>
            </div>
        )
    }
}

export default QuizScores;