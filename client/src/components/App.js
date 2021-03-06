import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import hist from "../helper/history";
import Login from './Login';
import SearchContainer from './SearchContainer';
import PrivateRoute from "../helper/PrivateRoute";

class App extends Component{
  state = {
    title: "Login",
    cabin: [ "All", "Business", "Economy", "First", "Premium" ],
  }

  componentDidMount() {
    this.setTitle();
  }

  setTitle = () => {
    switch(window.location.pathname) {
      case "/search":
        return this.setState({ title: "Search flight"});
      default:
        return this.state.title;
    }
  }

  render() {
    const { title, cabin } = this.state;
    return (
      <div>
        <div className="jumbotron"></div>
        
        <div className="container">
          <h2 style={styles.title}>{title}</h2>
          <Router history={hist}>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/search" component={(props) => <SearchContainer {...props} cabin={cabin}/>} /> 
          </Switch>
        </Router>
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    color: "#e0a800"
  }
}

export default App;
