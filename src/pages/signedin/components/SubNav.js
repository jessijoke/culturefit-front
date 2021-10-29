import './subnav.css';

const SubNav = ({cwBtn, vwqBtn}) => {
    return(
        <div className="subnav">
            <div className="subnavFlex">
                <a href="/" onClick={cwBtn()}>create survey</a>
                <div>|</div> 
                <a href="/" onClick={vwqBtn()}><div>completed surveys</div></a>
            </div>
        </div>
    )
}

export default SubNav;