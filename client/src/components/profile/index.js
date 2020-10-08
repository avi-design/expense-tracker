import React, { Component,Fragment } from 'react';
import NavBar from "../navbar/left-navbar";
import Profile from "../../components/profile/create-profile"

class CreateProfile extends Component{

    render(){
        return(
            <Fragment>
            <NavBar></NavBar>
            <div className="main-content">
               
                <Profile></Profile>
            </div>
            </Fragment>
        )
    }
}

export default CreateProfile;