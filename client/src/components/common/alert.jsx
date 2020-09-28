import React from 'react'
import {connect} from "react-redux";
//import PropTypes from "prop-types"

const Alert = ({alerts}) => {
    //console.log(alerts);
    //console.log(alerts.length + "...." + alerts);
    return(
        alerts !== null && alerts.length > 0 && alerts.map(alertData =>(
        
            <div className={`alert alert-${alertData.alertType}`} key={alertData.id}>
                   {alertData.msg}
            </div>
        ))  
    )
    }
        


const mapStateToProps = state =>({
    alerts:state.alert
})

export default connect(mapStateToProps)(Alert);
