import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";


export const Privateroute = ({component:Component ,auth:{isAuthenticated, loading}, ...rest}) => (
    
    <Route {...rest} render={props=>!isAuthenticated && !loading ? <Redirect to="/"/> : <Component {...props}/> } />
)

Privateroute.propTypes = {
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state =>{
    console.log(state.auth);
    return{
        auth:state.auth
    }
    
}

export default connect(mapStateToProps)(Privateroute)
