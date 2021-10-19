import React, { Component } from 'react';
import SubNav from './components/SubNav'

class CompanyHome extends Component {
    render() {
        return(
            <div className="companyHome">
                <SubNav />
                Pretty much the same thing but now you are logged in as a Company
            </div>
        )
    }
}

export default CompanyHome;