import React, {useState, useEffect} from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect, Link, useHistory } from 'react-router-dom';
import{bindActionCreators} from "redux";
import{connect} from "react-redux";
import {loginUser, googleResponseData, setAlert} from "../../actions";
import History from "../../store/history"
import {userLogin, getUserDeatils} from "../../services/login-service"
import PropTypes from 'prop-types';
import Alert from "../common/alert";
const LoginContainer = ({loginUser,setAlert,isAuthenticated})=> {
  //const{onLoginClick} =this.props;
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value}); 
  }
  //const {loginUser,setAlert,isAuthenticated} =this.props

  const{email, password} = formData;
 
  const onLoginSubmit = async (e) =>{
    e.preventDefault();
    const loginUserDetails = await userLogin(formData);
    if(loginUserDetails.errors == undefined){
    loginUser(loginUserDetails.data);
    const userDetailRes = await getUserDeatils();
    //console.log(userDetailRes)
    /* if(userDetailRes.data != undefined)
      loadUser(userDetailRes, "USER_LOADED");
      else{
        loadUser(userDetailRes, "AUTH_ERROR"); 
        setAlert(userDetailRes.msg,"danger", 3000);
      } */
      
    }
    else{
      loginUserDetails.errors.forEach(errorMsg=>{setAlert(errorMsg.msg,"danger", 3000)});
    }
   
    //console.log(props);
     //this.props.loginUser(loginUserDetails);
      //this.setState({error:false});
      //debugger;
     
      //loadUser(userDetailRes);
     
      
      //loadUser(userDetailRes);
  }
  /*componentDidMount() {
    // Typical usage (don't forget to compare props):
    if (this.props.user !== prevProps.user) {
      this.renderDashboard();
    }
  }*/

  const renderDashboard= ()=>{
    //console.log(this.props);    
    History.push("/expenses"); 
  }

      const responseGoogle = (response) => {
      var userData = JSON.stringify(response.profileObj); 
          if (response) {
            sessionStorage.setItem("googleUserData", userData);
            //this.props.googLoginResposne(sessionStorage.getItem("googleUserData"));
            this.props.loginUser(this.state.userName, this.state.pass,response)
            //console.log(JSON.parse(sessionStorage.getItem("googleUserData")));
            return(<Redirect to="/dashboard"></Redirect>);
          } 
        }
        //debugger;
        //console.log(isAuthenticated);
        if(isAuthenticated){
          return <Redirect to="/dashboard"/>;
        } 
          
       
   /*if(this.props.user && this.props.user.isLoggedIn){
    return(<Redirect to="/dashboard"></Redirect>);
   }*/            
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
              <Alert/>
              <form role="form">
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" placeholder="Email Address" name="email" type="email" value={email} onChange={e=>handleChange(e)} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" placeholder="Password" type="password" name ="password" value={password} onChange={e=>handleChange(e)}/>
                  </div>
                </div>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                  <label className="custom-control-label">
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary my-4" onClick={e => onLoginSubmit(e)}>Sign in</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <a href="#" className="text-light"><small>Forgot password?</small></a>
            </div>
            <div className="col-6 text-right">
              <Link to="/register" className="text-light"><small>Create new account</small></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        )
    }
    LoginContainer.propTypes = {
      loginUser:PropTypes.func.isRequired,
      setAlert:PropTypes.func.isRequired,
      isAuthenticated:PropTypes.bool,
    }


const mapStateToProps = (state)=>{
  //debugger;
  return{
      isAuthenticated:state.auth.isAuthenticated
  }
} 

/*function matchDispatchToProps(dispatch){
  debugger;
  return{ 
    onLoginClick: (formData) =>{
    dispatch(loginUser(formData));
  }
  /*googLoginResposne:(data) =>{
    dispatch(googleResponseData(data));
  }
}

  //return bindActionCreators({loginUser:loginUser}, dispatch);
}*/ 

export default connect(mapStateToProps,{loginUser,setAlert})(LoginContainer);