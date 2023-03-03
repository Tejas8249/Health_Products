import { USER_LOGGEDIN_ACTION  } from "../actions"

export const UserLoggedInAction = (res) => {
    return {
        type : USER_LOGGEDIN_ACTION,
        payload : res
    }
}