import { GET_MY_ORDER_DETAILES } from "../actions"

export const myOrderDetailes = (res) => {
    return {
        type : GET_MY_ORDER_DETAILES,
        payload : res
    }
}