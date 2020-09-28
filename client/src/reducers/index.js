import {combineReducers} from 'redux';
import transactionName from "./reducer.transactions";
import alert from "./alert";
import auth from "./auth.reducer";
import userDetails from "./reducer.user"
export const allReducers = combineReducers({
    user:userDetails,
    alert:alert,
    auth:auth, 
    transactionList:transactionName
})

