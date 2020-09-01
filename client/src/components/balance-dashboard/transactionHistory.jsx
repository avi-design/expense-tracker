import React, { Component } from 'react';
import {connect} from "react-redux";

class TransactionList extends Component{

    render(){
      const transactionSummaryMap= this.props.transactionSummary;
      //const transactionHistoryList = this.transactionHistoryList();
      //console.log(transactionHistoryList);
      if(transactionSummaryMap.length > 0)
        return(
              <div className="row py-lg-5">
              <div className="col-xl-12">    
              <div className="card bg-secondary shadow border-0">
              <div className="card-header bg-transparent">
                <h3 className="text-muted text-center mt-2 mb-3">Transaction History</h3>
                <div className="btn-wrapper text-center">
                
                </div>
              </div>
              <div className="card-body">
              <ul className="col-xl-12">
              {transactionSummaryMap.map((transdeatils, index)=>{
              return(
              <li className="transactionRow mb-4" key={index}>
                <span className="col-xl-6">{transdeatils.transItem}</span>
                <span className="col-xl-6 text-right">{transdeatils.transAmount}</span>
              </li>
             )
            })
            }
              </ul>
            </div>
          </div>
          </div>
          </div>
        )
        else return (<div className="row py-lg-5"></div>)
        }
    
}

function mapStateToProps(state){
  return{
    transactionSummary :state.transactionList
  }

}

export default connect(mapStateToProps)(TransactionList);