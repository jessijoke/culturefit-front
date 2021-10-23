import React, { Component } from 'react';
import { connect } from "react-redux";
import './userquiz.css';

class UserQuiz extends Component {
    constructor(props) {
        super();
        this.state = {
            quizName: "",
            quizData: {},
            quizAttributes: {}
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

    /*
    addUserScore = (targetName, targetValue) => {
        this.setState({
            targetName: this.state.targetName += targetValue
        })
    }*/

    handleSubmit = (event) => {
        event.preventDefault();
        //console.log(event.target);
        let userScore = {}
        Array.prototype.forEach.call(event.target.elements, (element) => {
            if (element.checked) {
                let valueName = element.value
                if (valueName in userScore) {
                    userScore[valueName] = userScore[valueName] + 1
                } else {
                    userScore[valueName] = 1
                }
            }
          })
          this.setState({
              quizAttributes: userScore
          }, () => { console.log(this.state )})
          console.log("TESTING")
          /*
          for (const [key, value] of Object.entries(userScore)) {
            this.setState({
                [key]: value
            }, () => { console.log(this.state) })
          }*/
          //console.log(this.state)
          //this.isElChecked(element);
    }


    /*
    isElChecked = (element) => {
       if (element.checked) { this.findElement(element.value); }
    }

    findElement = (element) => {
        if (element in this.state) {
            this.addToElement(element)
        } else {
            this.createElement(element)
        }
    }

    createElement = (element) => {
        this.setState({
            [element]: 0
        }, () => { 
            
            console.log("It did not find the key")
            //console.log(element);
            console.log(this.state)
        })
    }

    addToElement = (element) => {
        this.setState({
            [element]: this.state[element] + 1
        }, () => { 
            console.log("It found the key")
            //console.log(element);
            console.log(this.state);
        })
    }*/

    render() {
        const quizData = Object.entries(this.state.quizData).map(([k,value])=>{
            return (
                <div className="questionSet" key={value.question_name.question_id}>
                    <div key={value.question_name.question_id}>
                    {value.question_name.question}
                    </div>
                    {
                    Object.entries(value.answers).map(([answerKey, answerValue]) => {
                        return <div className="answers" key={answerKey}>
                        <input type="radio" id={answerValue.answer_name.answer} name={value.question_id} value={answerValue.answer_attribute.answer_attribute} key={answerValue.answer_name.answer_id}/>
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
                        <form onSubmit={this.handleSubmit}>
                        {quizData}
                        <button className="submit">Submit</button>
                        </form>
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