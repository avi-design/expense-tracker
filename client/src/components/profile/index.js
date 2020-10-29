import React, { Component,Fragment } from 'react';
import NavBar from "../navbar/left-navbar";
import Profile from "../../components/profile/create-profile"
import TopNavigation from "../navbar/top-navbar"

class CreateProfile extends Component{

    render(){
        return(
            <Fragment>
            <NavBar></NavBar>
            <div className="main-content">
                <TopNavigation/>
                <Profile></Profile>
            </div>
            </Fragment>
        )
    }
}

export default CreateProfile;