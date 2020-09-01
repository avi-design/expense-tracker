export const loginUser =(user, pass, data)=>
{
    console.log("click login +++++++" + user + pass + data);
    if(user == "avijit" && pass == "pass") {
    return{
        type:"USER_LOGIN",
        payLoad:{isLoggedIn:true, name:"Avijit Bhattacherjee",imageUrl:"https://lh3.googleusercontent.com/a-/AOh14GiRVmIAlCziYxpWuyCkE_AmJXzKww3uzGZydN3Jfg=s96-c", googleUserData:data}
    }
}
    return{
        type:"GOOGLE_LOGIN",
        payLoad:{isLoggedIn:true,googleUserData:data}
    }
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
        type:"ADD_TRANSACTION",
        payLoad:{transItem:name,transAmount:amount}
    }
    
}
