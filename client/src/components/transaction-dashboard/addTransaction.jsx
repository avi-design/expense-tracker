import React, { Component, useState } from 'react';
import {connect} from "react-redux";
import{addTransactionAction} from "../../actions";
import {sendTransaction} from "../../services/transaction-service";

const AddTransaction =({addTransactionAction})=>{

  const [formTrans, setFormTrans] = useState({
    name:'',
    amount:''
  });

  const setFormData = (e)=>{
    //const inputValue = e.target.value;
    //const nameRegx = ;
    //debugger;
    setFormTrans({...formTrans,[e.target.name] : e.target.value});
  }
  //const {name,amount} = formTrans;
  //console.log(formTrans)
  /* setAmount = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })

  } */

 const addTransaction = async()=>{
    const transData = await sendTransaction(formTrans);
    addTransactionAction(transData.data);
  }

  const showErrorBlock = ()=>{

  }


        return(
          <div className="row">
            <div className="col-xl-12">
            <div className="card bg-secondary shadow border-0">
            <div className="card-header bg-transparent">
              <h3 className="text-muted text-center mt-2 mb-3">Add New Transaction</h3>
              <div className="btn-wrapper text-center">
              
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <form role="form">
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" placeholder="Enter item..." name="name" type="text" onChange={e=>setFormData(e)} />
  
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" placeholder="Enter amount..." name="amount" type="text" onChange={e=>setFormData(e)} />
                  </div>
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary my-4" onClick={e=>addTransaction(e)}>Add Transaction</button>
                </div>
               
              </form>
            </div>
          </div>
          </div>
          </div>
        )
    }

/* function mapStateToProps(state) {
  
  
} */

/* function matchDispatchToProps(dispatch){
  return{
    addTransactionDispatch:(name, amount)=>{
      dispatch(addTransactionAction(name, amount))
    }
  }

} */


export default connect(null,{addTransactionAction})(AddTransaction);
