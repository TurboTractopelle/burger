import * as actionTypes from "./actionTypes"
import axios from "../../axios-order"

const actionCreactor = (type, ...autreArgs) => {
    return (...arg) => {
        const action = {type}
        autreArgs.map((item,i) => action[item] = arg[i] )
        return action
    }
}

export const purchaseBurgerSuccess = (id, orderData) => actionCreactor(actionTypes.PURCHASE_BURGER_SUCCESS, "id", "orderData")
export const purchaseBurgerFail = (error) => actionCreactor(actionTypes.PURCHASE_BURGER_FAIL, "error")


export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.post("/orders.json" , orderData)
        .then(resp=> {
            console.log(resp.data)
            dispatch(purchaseBurgerSuccess(resp.data,orderData))
        })
        .catch(error=> dispatch(purchaseBurgerFail(error)))
    }
}
