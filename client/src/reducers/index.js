import {combineReducers} from 'redux';
import userInfoReducer from './reducer.user'
import transactionName from "./reducer.transactions"

export const allReducers = combineReducers({
    user: userInfoReducer,
    transactionList:transactionName
})

