import{AUTH_ERROR,USER_LOADED,GOOGLE_LOGIN,LOGOUT}from "../actions/actionTypes";

const intialState = {
    isAuthenticated: false,
    loading:true,
    userDetails:null
}
export default function( state = intialState, action){
    //const isLoogedIn = false;
    //const googleUserProfile = sessionStorage.getItem('userProfile');
    //debugger;
    switch (action.type) {  
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated:true,
                loading:false,
                userDetails:action.payload.data
            } 
        break;
        case AUTH_ERROR:
            localStorage.removeItem("token")
            return {
                msg:action.payload.message,
                loading:false,
            } 
        break;
        case GOOGLE_LOGIN:
            return action.payload
            break;
        default :
            return state;
        break;
    }
           
}