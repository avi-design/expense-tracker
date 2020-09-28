import { v4 as uuidv4 } from 'uuid';
import{SET_ALERT,REMOVE_ALERT, USER_LOGIN,GOOGLE_LOGIN,ADD_TRANSACTION} from "./actionTypes";
import{REGISTER_SUCCESS,REGISTER_FAIL,AUTH_ERROR,USER_LOADED,LOGOUT} from "./actionTypes"
import { Action } from 'history';
export const loginUser =(userData)=> dispatch =>
{
   
    dispatch({
            type:USER_LOGIN,
            payload:userData.token
    })
    /* return{
        type:GOOGLE_LOGIN,
        payLoad:{isLoggedIn:true,googleUserData:data}
    } */
}

export const loadUser =(userDetailRes, type)=>dispatch =>
{
    dispatch({
        type:type,
        payload:userDetailRes
    });
}

/*export const googleResponseData =(data)=>
{
    return{
        type:"GOOGLE_LOGIN",
        payLoad:{googleUserData:data,isLoggedIn:true}
    }
    
}*/

export const addTransactionAction =(name, amount)=>
{
    return{
        type:ADD_TRANSACTION,
        payLoad:{transItem:name,transAmount:amount}
    }
    
}

export const setAlert = (msg, alertType, timeout)=> dispatch =>  {
    const id =uuidv4();
    dispatch({
        type:SET_ALERT,
        payload:{msg, alertType ,id}
    })

    setTimeout(()=>{
        dispatch({
            type:REMOVE_ALERT,
            payload:id
        })
    }, timeout)
}

export const registerSuccess =(data)=>
{
    return{
        type:REGISTER_SUCCESS,
        payload:data.token
    }  
}

export const registerFail = () => dispatch =>
{
    dispatch({
        type:REGISTER_FAIL
    })  
}

export const logOut = () => dispatch =>

{
    dispatch({
        type:LOGOUT
    })  
}