import{AUTH_ERROR,USER_LOADED,GOOGLE_LOGIN}from "../actions/actionTypes";

const intialState = {
    isAuthenticated: false,
    loading:true,
    userDeatils:null
}
export default function( state = intialState, action){
    //const isLoogedIn = false;
    //const googleUserProfile = sessionStorage.getItem('userProfile');
    //debugger;
    console.log("button click" + state);
    switch (action.type) {  
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated:true,
                loading:false,
                userDeatils:action.payload.data
            } 
        break;
        case AUTH_ERROR:
            localStorage.removeItem("token")
            return {
                ...state,
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