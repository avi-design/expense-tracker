import React, {useEffect, useState}from 'react';
import {connect} from "react-redux";
import{logOut} from "../../actions";
import{Link, useHistory} from "react-router-dom"


const TopNavigation = ({userData,logOut,props})=>{
    const [profileDropDown, setprofileDropDown] = useState(false);
    const[clickCount, setclickCount] = useState(0);
    const navDropDown = () =>{ 
        if(clickCount == 0){
            setprofileDropDown(true);
            setclickCount(1)
        }
        else{
            setprofileDropDown(false);
            setclickCount(0);
        }
        
    }    
    
    if(userData.isAuthenticated)
    return(
        <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">
          <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="./index.html">Dashboard</a>
          <ul className="navbar-nav align-items-center d-none d-md-flex">
            <li className={profileDropDown ? "nav-item dropdown show" : "nav-item dropdown"}>
              <a className="nav-link pr-0" href="#" onClick={()=>navDropDown()}role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src=""/>
                  </span>
                  <div className="media-body ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm  font-weight-bold"> {userData.userDetails.firstname} {userData.userDetails.lastname} </span>
                  </div>
                </div>
              </a>
              <div className={"dropdown-menu dropdown-menu-arrow dropdown-menu-right "+(profileDropDown ? "show" : "")}>
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </div>
                <Link className="dropdown-item" to="/profile">
                  <i className="ni ni-single-02"></i>
                  <span>My profile</span>
                </Link>
                <a href="./examples/profile.html" className="dropdown-item">
                  <i className="ni ni-settings-gear-65"></i>
                  <span>Settings</span>
                </a>
                <a href="./examples/profile.html" className="dropdown-item">
                  <i className="ni ni-calendar-grid-58"></i>
                  <span>Activity</span>
                </a>
                <a href="./examples/profile.html" className="dropdown-item">
                  <i className="ni ni-support-16"></i>
                  <span>Support</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#!" className="dropdown-item" onClick={logOut}>
                  <i className="ni ni-user-run"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
    else
    return(<div></div>)

}
const mapStateToProps = (state)=>{
    return{
        userData:state.user
    }
    
}

const mapDispatchToProps = dispatch =>{
    return{
        logOut:()=> dispatch(logOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopNavigation);