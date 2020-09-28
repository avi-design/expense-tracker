import axios from "axios";
import setToken from "../utils/token";
import {loadUser,setAlert} from "../actions";
import store from "../store/store";
export const userLogin = async (loginDetails)=>{
    try {
        const userRes =  await axios.post("api/auth/login",loginDetails)
        return userRes
    } catch (error) {
        console.error(error.message);
        return error.response.data; 
    }
}

export const getUserDeatils = async ()=>{
   // debugger;
    if(localStorage.token){
        setToken(localStorage.token)
      }
    try {
        const userDetailsRes =  await axios.get("api/profile/me");
        //userDetailsRes.data !=undefined ? store.dispatch(loadUser(userDetailsRes, "USER_LOADED")) : store.dispatch(loadUser(userDetailsRes, "AUTH_ERROR"));
        if(userDetailsRes.data != undefined){
        store.dispatch(loadUser(userDetailsRes, "USER_LOADED"));
        }
        else{
            store.dispatch(loadUser(userDetailsRes, "AUTH_ERROR")); 
        }
        return userDetailsRes;
    } catch (error) {
        console.error(error.message);
        store.dispatch(loadUser(error.response.data, "AUTH_ERROR"));
        store.dispatch(setAlert(error.response.data.msg,"danger", 3000));
        return error.response.data;
    }
   
}