import React, { Component } from 'react';
import LoginContainer from "./login-box";
import LoginHeader from "./header";
import FooterContainer from "../footer/footer";

class LoginPage extends Component{
    render(){
        return(
            <div className="main-content">
                <LoginHeader></LoginHeader>
                <LoginContainer></LoginContainer>
                <FooterContainer></FooterContainer>
            </div>
        )
    }
}
export default LoginPage;