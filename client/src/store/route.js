import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import history from "./history";
import DashBoardContent from "../components/dashboard";
import LoginPage from "../components/login";

const Routes = (
    <Router history={history}>   
      <Route path='/' component={LoginPage} />
      <Route path='/name' component={DashBoardContent} />
    </Router>
  );

  export default Routes;