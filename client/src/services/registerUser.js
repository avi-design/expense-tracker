import axios from "axios";

export const registerUser = async (userDetails, headers)=> {
    try {
        return await axios.post("api/user/register", userDetails, headers ); 
    } catch (error) {
        console.error(error.message);
        return await error.response.data;
    }
   
     /*const token = axios.post("api/user/register", userDetails ).then((response) =>{ 
        return response; 
    }).then(data =>{
        console.log(data);
        return data
    })  .catch(function (error) {
        console.error(error.message);
    })*/
//return token;
/*const token = fetch('api/user/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(userDetails)
    }).then(response => {
        console.log(response); 
        if(response.ok) return response.json();
      })
return token;*/
} 