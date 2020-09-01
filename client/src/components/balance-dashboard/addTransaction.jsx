import React, { Component } from 'react';
import {connect} from "react-redux";
import{addTransactionAction} from "../../actions"

class AddTransaction extends Component{

  state={
    expName:"",
    expPrice:"",
    errorTransactionBlock:false
  }

  setText = (e)=>{
    const inputValue = e.target.value;
    //const nameRegx = ;
    //debugger;
    this.setState({
      [e.target.name] : e.target.value
    })
    
  }

  setAmount = (e) =>{

    this.setState({
      [e.target.name] : e.target.value
    })

  }

  addTransaction =()=>{
    this.props.addTransactionDispatch(this.state.expName, this.state.expPrice);
  }

  showErrorBlock = ()=>{

  }

    render(){
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
                    <input className="form-control" placeholder="Enter item..." name="expName" type="text" value={this.state.expName} onChange={this.setText} />
  
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" placeholder="Enter amount..." name="expPrice" type="text" value={this.state.expPrice} onChange={this.setAmount} />
                  </div>
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary my-4" onClick={this.addTransaction}>Add Transaction</button>
                </div>
               
              </form>
            </div>
          </div>
          </div>
          </div>
        )
    }
}
function mapStateToProps(state) {
  
  
}

function matchDispatchToProps(dispatch){
  return{
    addTransactionDispatch:(name, amount)=>{
      dispatch(addTransactionAction(name, amount))
    }
  }

}


export default connect(mapStateToProps, matchDispatchToProps)(AddTransaction);
