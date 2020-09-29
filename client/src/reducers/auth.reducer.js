import{REGISTER_SUCCESS,REGISTER_FAIL, USER_LOGIN, LOGOUT}from "../actions/actionTypes"

const intialState = {
    token:localStorage.getItem("token"),
    isAuthenticated: false,
    loading:true,
    userDeatils:null
}


export default function (state = intialState, action) {
    const{type, payload} = action;
    //debugger;
    switch (type) {
        case REGISTER_SUCCESS:
        case USER_LOGIN:
            localStorage.setItem("token",payload)
            return{
                ...state,
                token:payload,
                isAuthenticated:true,
                loading:false
            }
            break;
        case REGISTER_FAIL:
            localStorage.removeItem("token")
            return{
                ...state,
                loading:false,
                isAuthenticated: false,
                token:null
            }
            break;
        default:
            return state;
            break;
    }

    
}