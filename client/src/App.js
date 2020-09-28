import React, { Component } from 'react';
import './App.css';
import "./css/@fonts/all.css"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import{connect} from "react-redux";
import DashBoardContent from "./components/dashboard";
import LoginPage from "./components/login";
import ExpenseTable from "./components/balance-dashboard/balance";
import RegisterMemeber from "./components/registration";
import {getUserDeatils} from "./services/login-service"
import PrivateRoute from "./route/privateRoute";
//import {Provider} from "react-redux";

class App extends Component {
  constructor(props){
    super(props)
  };
  
  componentDidMount(){
    getUserDeatils();
  }

render(){
    return(
      <Router>
      <Route exact path='/' component={LoginPage} />
      <Switch>
      <Route exact path='/register' component={RegisterMemeber} />
        <PrivateRoute exact path='/expenses' component={ExpenseTable} />
        <PrivateRoute exact path='/dashboard' component={DashBoardContent} />
      </Switch>
     
    </Router>
   
    )
  }
}

function mapStateToProps(state) {
  return{
    user:state.user
  }
  
}

export default connect(mapStateToProps)(App);
