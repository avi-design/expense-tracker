import {ADD_TRANSACTION, DELETE_TRANSACTION} from "../actions/actionTypes";

const initialState = []

export default function(state=initialState , action){
    switch (action.type) {
        case ADD_TRANSACTION:
            return [...state, action.payLoad ]
        break;
        case DELETE_TRANSACTION:
            return action.payLoad
        break;
        default :
            return state;
        break;
    }
}