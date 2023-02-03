import { USER_ACTION, USER_LOGGEDIN  } from "../actions"


export const UserAction = (res) => {
    return {
        type : USER_ACTION,
        payload : res
    }
}

export const UserLoggedInAction = (res) => {
    return {
        type : USER_LOGGEDIN,
        payload : res
    }
}
  