import axios from "axios";

export const updateProfile = async (data) =>{
    debugger;
    try {
        return await axios.post("api/profile/createAndUpdate", data);  
    } catch (error) {
        console.error(error.message);
        return await error.response.data;
    }
    

}