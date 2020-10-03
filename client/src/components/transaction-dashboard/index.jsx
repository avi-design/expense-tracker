import React, { Component, Fragment} from 'react';
import {connect} from "react-redux";
import NavBar from "../navbar/left-navbar"
import FooterContainer from "../footer/footer"
import IncomeExpenses from "./incomeExpenses"
import AddTransaction from './addTransaction';
import TransactionList from "./transactionHistory";
import TopNavigation from "../navbar/top-navbar";
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
         <TopNavigation/> 

    
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