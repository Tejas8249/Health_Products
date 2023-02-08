import { USER_ACTION } from "../actions"


export const UserAction = (res) => {
    return {
        type : USER_ACTION,
        payload : res
    }
}


  