export default function( state = null, action){
    //const isLoogedIn = false;
    //const googleUserProfile = sessionStorage.getItem('userProfile');
    switch (action.type) {  
        case "USER_LOGIN":
            return action.payLoad 
        break;
        case "GOOGLE_LOGIN":
            return action.payLoad
            break;
        default :
            return state;
        break;
    }
           
}