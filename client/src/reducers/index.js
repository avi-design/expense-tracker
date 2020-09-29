import {combineReducers} from 'redux';
import transactionName from "./reducer.transactions";
import alert from "./alert";
import auth from "./auth.reducer";
import userDetails from "./reducer.user";
import{LOGOUT} from "../actions/actionTypes";

const allReducers = combineReducers({
    user:userDetails,
    alert:alert,
    auth:auth, 
    transactionList:transactionName
})

const rootReducer = (state, action) => {
    debugger;   
    // Clear all data in redux store to initial.
    if(action.type == LOGOUT){
        localStorage.removeItem("token")
        state = undefined; 
    }
   
    return allReducers(state, action);
 };
 export default rootReducer;

