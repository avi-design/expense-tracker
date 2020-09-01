import React, { Component } from 'react';
import RightContent from "./right-component";
import NavBar from "../left-navbar/navbar";

class DashBoardContent extends Component{

    render(){
        console.log(this.props);
        return(
            <div className="main-content">
                <NavBar></NavBar>
                <RightContent></RightContent>
            </div>
        )
    }
}

export default DashBoardContent;
