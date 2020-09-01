import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect, Link, useHistory } from 'react-router-dom';
import{bindActionCreators} from "redux";
import{connect} from "react-redux";
import {loginUser, googleResponseData} from "../../actions"
import History from "../../store/history"
class LoginContainer extends Component{

  state={
      userName:'',
      pass:'',
      error:true
  }
 
  onLoginSubmit = () =>{
      this.props.onLoginClick(this.state.userName, this.state.pass,null)
      //this.setState({error:false});
  }

  componentDidUpdate(prevProps) {
    //console.log(store.getState());
    // Typical usage (don't forget to compare props):
    if (this.props.user !== prevProps.user) {
      this.renderDashboard();
    }
  }
  renderDashboard(){
    //console.log(this.props);    
    History.push("/dashboard"); 
  }
  
  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
    
  }

  
    render(){
      const responseGoogle = (response) => {
              var userData = JSON.stringify(response.profileObj);
              
              if (response) {
                sessionStorage.setItem("googleUserData", userData);
                //this.props.googLoginResposne(sessionStorage.getItem("googleUserData"));
                this.props.onLoginClick(this.state.userName, this.state.pass,response)
                //console.log(JSON.parse(sessionStorage.getItem("googleUserData")));
                return(<Redirect to="/dashboard"></Redirect>);
              } 
            }
   if(this.props.user && this.props.user.isLoggedIn){
    return(<Redirect to="/dashboard"></Redirect>);
   }            
  return(
  <div className="main-content">
    
    <div className="header bg-gradient-primary py-7 py-lg-8">
      <div className="container">
        <div className="header-body text-center mb-7">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <h1 className="text-white">Welcome!</h1>
              <p className="text-lead text-light">Use these awesome forms to login or create new account in your project for free.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>

    <div className="container mt--8 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="card bg-secondary shadow border-0">
            <div className="card-header bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
              <div className="btn-wrapper text-center">
                <a href="#" className="btn btn-neutral btn-icon">
                  <span className="btn-inner--icon"><img src="../assets/img/icons/common/github.svg"/></span>
                  <span className="btn-inner--text">Github</span>
                </a>
                <GoogleLogin
                clientId="37465664578-nm72p218335ttkpk9f70lgkqko9oai66.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}>
                </GoogleLogin>
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <form role="form">
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" placeholder="User Name" name="userName" type="text" value={this.state.userName} onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" placeholder="Password" type="password" name ="pass" value={this.state.pass} onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                  <label className="custom-control-label">
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary my-4" onClick={this.onLoginSubmit}>Sign in</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <a href="#" className="text-light"><small>Forgot password?</small></a>
            </div>
            <div className="col-6 text-right">
              <a href="#" className="text-light"><small>Create new account</small></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
        )
    }
}


function mapStateToProps(state) {
  debugger;
  return{
    user:state.user
  }
  
}

function matchDispatchToProps(dispatch){
  return{ 
    onLoginClick: (user, pass,data) =>{
    dispatch(loginUser(user, pass, data));
  }/* ,
  googLoginResposne:(data) =>{
    dispatch(googleResponseData(data));
  } */
}
  //return bindActionCreators({loginUser:loginUser}, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps)(LoginContainer);