export default function(state=[] , action){
    switch (action.type) {
        case "ADD_TRANSACTION":
            return [...state, action.payLoad ]
        break;
        default :
            return state;
        break;
    }
}