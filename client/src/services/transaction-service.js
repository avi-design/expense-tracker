import axios from "axios";
import setToken from "../utils/token";
if(localStorage.token){
    setToken(localStorage.token)
  }
export const sendTransaction = async (formTrans)=>{
    debugger;
   
      try {
        return await axios.post("api/transaction/add",formTrans)
      } catch (error) {
          console.error(error.message);
          return error.response;
      }
    
}

export const getAllTransaction = async (useId)=>{
    //debugger;
    try {
        return await axios.get("api/transaction/getTransaction/"+useId)
      } catch (error) {
          console.error(error.message);
          return error.response;
      }
    
}