import React, { Component } from 'react';
import PreLoginHeader from "../header/pre-login-header";
import FooterContainer from "../footer/footer";
import {registerUser} from "../../services/registerUser";
import {setAlert, registerSuccess, registerFail} from "../../actions";
import{connect} from "react-redux";
import Alert from "../common/alert"

class RegisterMemeber extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            password:'',
            email:''
        }
        //console.log(this.props);
    }
   
handleChange =(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

onSubmitRegister = async (e) =>{
    const {setAlert, registerSuccess,registerFail} = this.props
    e.preventDefault();
    /* if(this.state.name==""||this.state.password=="" || this.state.email==""){
        return setAlert("All fields are required !!!","danger", 3000);
        
    } */
   
    
      const newUser = this.state;
      const config = {
          headers:{
              'Content-Type':'application/json'
          }
      }
        const res = await registerUser(newUser, config);
        if(res.errors == undefined){
            registerSuccess(res.data)
        }
        else{
            const errorMsg = res.errors;
            registerFail();
            errorMsg.forEach(errors =>{setAlert(errors,"danger", 3000)})
        }
   console.log(this.props.isAuthenticated);
}

render(){
    return(
        <div className="main-content bg-default">
        <PreLoginHeader/>
        <div className="header bg-gradient-primary py-7 py-lg-8">
      <div className="container">
        <div className="header-body text-center mb-7">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <h1 className="text-white">Register!</h1>
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
    </div>

        <div className="container mt--8 pb-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card bg-secondary shadow border-0">
            <div className="card-header bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4"><small>Sign up with</small></div>
              <div className="text-center">
                <a href="#" className="btn btn-neutral btn-icon mr-4">
                  <span className="btn-inner--icon"><img src="../assets/img/icons/common/github.svg"/></span>
                  <span className="btn-inner--text">Github</span>
                </a>
                <a href="#" className="btn btn-neutral btn-icon">
                  <span className="btn-inner--icon"><img src="../assets/img/icons/common/google.svg"/></span>
                  <span className="btn-inner--text">Google</span>
                </a>
              </div>
            </div>
            
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <form >
              <Alert/>
                <div className="form-group">
                  <div className="input-group input-group-alternative mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                    </div>
                    <input className="form-control" placeholder="Name" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" placeholder="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" placeholder="Password" type="password" name="password" value={this.state.pass} onChange={this.handleChange}/>
                  </div>
                </div>
                {/* <div className="text-muted font-italic"><small>password strength: <span className="text-success font-weight-700">strong</span></small></div>
                <div className="row my-4">
                  <div className="col-12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input className="custom-control-input" id="customCheckRegister" type="checkbox"/>
                      <label className="custom-control-label" htmlFor="customCheckRegister">
                        <span className="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                      </label>
                    </div>
                  </div>
                </div> */}
                <div className="text-center">
                  <button type="button" className="btn btn-primary mt-4" onClick={this.onSubmitRegister}>Create account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterContainer/>
    </div>
    )
    }
}

const mapStateToProps = state =>{
  return{
    isAuthenticated : state.auth.isAuthenticated
  }
  
}

const mapDispatchToProps = dispatch =>{
  return{
    registerSuccess:(res) => dispatch(registerSuccess(res)),
    registerFail:() => dispatch(registerFail()),
    setAlert:(errors) => dispatch(setAlert(errors.msg,"danger", 3000))

  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterMemeber);