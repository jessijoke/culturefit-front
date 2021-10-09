import logo from './logo.svg';
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
        <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </>
        </Switch>
      </Router>
    </div>
  );
}

export default connect()(App);
