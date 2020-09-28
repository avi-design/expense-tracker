import React, { Component, Fragment} from 'react';
import {connect} from "react-redux";
import NavBar from "../left-navbar/navbar"
import FooterContainer from "../footer/footer"
import IncomeExpenses from "./incomeExpenses"
import AddTransaction from './addTransaction';
import TransactionList from "./transactionHistory";
class ExpenseTable extends Component{
  state ={
    price:"",
    name:""
  }

    render(){
        return(
    <Fragment>      
    <NavBar></NavBar>      
    <div className="main-content">
    <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div className="container-fluid">
        <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="./index.html">Dashboard</a>
        <ul className="navbar-nav align-items-center d-none d-md-flex">
          <li className="nav-item dropdown">
            <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src=""/>
                </span>
                <div className="media-body ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm  font-weight-bold"> John Smith</span>
                </div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="./examples/profile.html" className="dropdown-item">
                <i className="ni ni-single-02"></i>
                <span>My profile</span>
              </a>
              <a href="./examples/profile.html" className="dropdown-item">
                <i className="ni ni-settings-gear-65"></i>
                <span>Settings</span>
              </a>
              <a href="./examples/profile.html" className="dropdown-item">
                <i className="ni ni-calendar-grid-58"></i>
                <span>Activity</span>
              </a>
              <a href="./examples/profile.html" className="dropdown-item">
                <i className="ni ni-support-16"></i>
                <span>Support</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    
    <div className="container-fluid bg-gradient-primary padding-top-50">
    <div className="container pb-5">    
         
      <div className="row justify-content-center">


        <div className="col-lg-6 col-md-7">
        <div className="row">
      <div className="col-xl-12">
      <div className="card card-stats mb-4 mb-xl-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Your balance</h5>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="fas fa-chart-bar"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
      </div>  
      </div> 
          <IncomeExpenses></IncomeExpenses>
          <TransactionList></TransactionList>
          <AddTransaction/>
          
          
        </div>
      </div>
    </div>
    </div>
    <FooterContainer></FooterContainer>
  </div>
  </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return{
      user:state.user
    }
    
  }

export default connect(mapStateToProps) (ExpenseTable);