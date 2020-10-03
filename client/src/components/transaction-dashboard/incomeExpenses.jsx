import React, { Component } from 'react';
import {connect} from "react-redux";

class IncomeExpenses extends Component{
  constructor(props){
    super(props)
    this.state ={
     expTotal : "0.00"
    }
    this.props.transactionSummary.map((transaction, index)=>{
      this.setState({expTotal:parseInt(this.state.expTotal + transaction.transAmount).toFixed(2)});
    });
  }
render(){
   
  console.log(this.state.expTotal);
    return(
        <div className="row padding-top-50">
          <div className="col-xl-6 col-lg-6">
              <div className="card card-stats mb-4 mb-xl-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Income</h5>
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

            <div className="col-xl-6 col-lg-6">
              <div className="card card-stats mb-4 mb-xl-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Expenses</h5>
                      <span className="h2 font-weight-bold mb-0">{this.state.expTotal}</span>
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
    )
}
}

function mapStateToProps(state){
  return{
    transactionSummary:state.transactionList
  }
}

export default connect(mapStateToProps)(IncomeExpenses);
