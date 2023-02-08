import { USER_ACTION} from "../actions";

let UserReducer=(state=true, Action)=>{
     switch (Action.type) {
        case USER_ACTION: 
             return state=Action.payload     
        default:
            return state;
     }
}

export default UserReducer;
