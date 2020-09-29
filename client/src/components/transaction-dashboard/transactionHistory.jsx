import React, { Component,useDispatch} from 'react';
import {connect} from "react-redux";
import {getAllTransaction} from "../../services/transaction-service";
import{addTransactionAction} from "../../actions";
import store from "../../store/store"

class TransactionList extends Component{
    constructor(props){
      super(props)
      this.state = {
        userLoaded:false
      }

    }
    /* componentDidUpdate(){
      this.setState({
        user_id:this.props.userId.user._id,
        userLoaded:true
      })
    } */
    componentDidUpdate(){
      //debugger;
      //console.log(this.state.userLoaded);
      //const dispatch = useDispatch()
      //console.log(props)
      //debugger;
      //if(prevState.transactionData == this.state.transactionData){ 
        if(!this.state.userLoaded && this.props.isAuthenticated){
          let user_id = this.props.userId.user._id
            getAllTransaction(user_id).then((res)=>{
            // this.setTransData(res.data);
              //debugger;
              //this.setState({transactionData :res.data})
              this.setState({userLoaded:true})
              this.sendTransDataToStore(res.data);
              //console.log(this.state.transactionData);
            });
          //};
        }
    }


     sendTransDataToStore=(data)=>{
      data.map(item=>{
        store.dispatch(addTransactionAction({
          name:item.name,
          amount:item.amount
        }));
      })
      //console.log(data);
    }

    render(){
      const transactionSummaryMap= this.props.transactionSummary;
      //const transactionHistoryList = this.transactionHistoryList();
      //debugger;
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
    transactionSummary :state.transactionList,
    isAuthenticated:state.auth.isAuthenticated,
    userId:state.user.userDetails
  }

}

export default connect(mapStateToProps)(TransactionList);