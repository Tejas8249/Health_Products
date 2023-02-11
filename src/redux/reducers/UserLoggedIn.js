import { USER_LOGGEDIN_ACTION } from "../actions";


let UserLoggedIn=(state=false, Action)=>{
    switch (Action.type) {
       case USER_LOGGEDIN_ACTION: 
            return state=Action.payload     
       default: 
           return state;
    }
}

export default UserLoggedIn;



