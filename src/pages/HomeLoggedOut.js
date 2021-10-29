import About from './components/About'
import Footer from './components/Footer'
import "./home.css";

export const HomeLoggedOut = () => {
    return (<div className="gridContainer">

        <div className="firstSection">
        <h1>Find the perfect fit for your company’s culture.</h1>
        </div>

        <div className="secondSection">
        
        </div>
        <div className="secondSectionOverlap">
            <About />
        </div>

        <div className="thirdSection">
        <h2>And a 2005 analysis revealed that employees who fit well with their organization, coworkers, and supervisor had greater job satisfaction, were more likely to remain with their organization, and showed superior job performance.</h2>
        </div>

        <div className="fourthSection">
            <Footer />
        </div>
    </div>)
}