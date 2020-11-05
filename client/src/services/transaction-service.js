import axios from "axios";
import setToken from "../utils/token";
if(localStorage.token){
    setToken(localStorage.token)
  }
export const sendTransaction = async (formTrans)=>{
      try {
        return await axios.post("api/transaction/add",formTrans)
      } catch (error) {
          console.error(error.message);
          return error.response;
      }
    
}

export const getAllTransaction = async (useId)=>{
    try {
        return await axios.get("api/transaction/getTransaction/"+useId)
      } catch (error) {
          console.error(error.message);
          return error.response;
      }
    
}

export const removeTransaction = async (transData)=>{
  try {
      return await axios.delete("api/transaction/deleteTransaction", 
      { params: transData })
    } catch (error) {
        console.error(error.message);
        return error.response;
    }
  
}