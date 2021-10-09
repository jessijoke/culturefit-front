import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App(props) {

  console.log(props)
  console.log("hi")

  return (
    <div className="App">
      <Router>
        <Switch>
        <>
        <Route exact path={"/culturefit-front/"} component={Home} />
          <Route exact path={"/culturefit-front//signup"} component={Signup} />
          <Route exact path={"/culturefit-front//login"} component={Login} />
        </>
        </Switch>
      </Router>
    </div>
  );
}

export default connect()(App);
