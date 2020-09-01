import React, { Component } from 'react';
import './App.css';
import "./css/@fonts/all.css"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import{connect} from "react-redux";
import DashBoardContent from "./components/dashboard";
import LoginPage from "./components/login";
import ExpenseTable from "./components/balance-dashboard/balance"
import history from "./store/history";


class App extends Component {
  constructor(props){
    super(props)
  };
  
render(){

    return(
      <Router history={history}>
      <Route exact path='/' component={ExpenseTable} />  
      <Route path='/login' component={LoginPage} />
      <Route path='/dashboard' component={DashBoardContent} />
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
