import AskImage from '../../images/home/ask.png'
import PeopleImage from '../../images/home/people.png'
import ProgrammerImage from '../../images/home/programmer.png'
import './about.css'


const About = () => {
    return(
        <div className="aboutSectionFlex">
            <div className="aboutImage">
                <img src={ProgrammerImage} alt="An icon of a person with a computer."/> 
                <div className="aboutTitle">Companies create screener surveys.</div>
                <div>Companies can create surveys based on any topic to help screen job applicants and find the person who perfectly fits with their company's culture.</div>
            </div>
            <div className="aboutImage">
                <img src={AskImage} alt="An icon of a speech bubble with a question mark."/>
                <div className="aboutTitle">Job Seekers complete surveys.</div>
                <div>Job seekers can view all the surveys available, and complete the ones they're are interested in to have their score considered by potential employers.</div>
            </div>
            <div className="aboutImage">
                <img src={PeopleImage} alt="An icon of 3 people, with the one in front in more detail."/>
                <div className="aboutTitle">Companies review results to find their perfect fit.</div>
                <div>Finally companies can review the scores, and see how job seekers compare to each other based on the survey to help find the employee who will fit best with their culture.</div>
            </div>
        </div>
    )
}

export default About;