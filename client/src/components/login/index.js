import React, { Component } from 'react';
import LoginContainer from "./login-box";
import PreLoginHeader from "../header/pre-login-header";
import FooterContainer from "../footer/footer";

class LoginPage extends Component{
    render(){
        return(
            <div className="main-content bg-default">
                <PreLoginHeader></PreLoginHeader>
                <LoginContainer></LoginContainer>
                <FooterContainer></FooterContainer>
            </div>
        )
    }
}
export default LoginPage;