import React, { Component,useDispatch} from 'react';
import {connect} from "react-redux";
import {getAllTransaction, removeTransaction} from "../../services/transaction-service";
import{addTransactionAction, deleteTransactionAction} from "../../actions";
import store from "../../store/store"

class TransactionList extends Component{
    constructor(props){
      super(props)
      this.state = {
        userLoaded:false
      }
      //this.deleteTransaction = this.deleteTransaction.bind();
    }

    componentDidMount(){
        if(!this.state.userLoaded && this.props.isAuthenticated && 
          this.props.transactionSummary.length <= 0){
          let user_id = this.props.userId.user._id
            getAllTransaction(user_id).then((res)=>{
              this.setState({userLoaded:true})
              this.sendTransDataToStore(res.data);
            });
        }
    }


     sendTransDataToStore=(data)=>{
      //let alltrans = data;
      if(data.length>0)
      data.map(item=>{
        store.dispatch(addTransactionAction(item));
      })
      //console.log(data);
    }

    deleteTransaction= async (transactionSummaryMap,transdeatils, id)=>{
      //debugger;
      const delTrans ={
        name:transdeatils.name,
        amount:transdeatils.amount
      }
        await removeTransaction(delTrans);
        //debugger;
        let delTranslist= transactionSummaryMap.filter(i=> i.id !== id);
        store.dispatch(deleteTransactionAction(delTranslist));
      }

    render(){
      const transactionSummaryMap= this.props.transactionSummary;
      //console.log(this.props.transactionSummary);
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
              {transactionSummaryMap.map((transdeatils)=>{
              return(
              <li className="transactionRow mb-4" key={transdeatils.id}>
                <span className="col-xl-5">{transdeatils.name}</span>
                <span className="col-xl-4 text-right">{transdeatils.amount}</span>
                <span className="col-xl-3 text-right">
                <button type="button" className="btn btn-danger" onClick={()=>this.deleteTransaction(transactionSummaryMap,transdeatils, transdeatils.id)}>Delete</button>
                </span>
                
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
    transactionSummary :state.transactionList,
    isAuthenticated:state.auth.isAuthenticated,
    userId:state.user.userDetails
  }

}

export default connect(mapStateToProps)(TransactionList);