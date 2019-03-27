import * as actionTypes from "./actionTypes"
import axios from "../../axios-order"

const actionCreactor = (type, ...autreArgs) => {
    return (...arg) => {
        const action = {type}
        autreArgs.map((item,i) => action[item] = arg[i] )
        return action
    }
}

export const purchaseBurgerSuccess = actionCreactor(actionTypes.PURCHASE_BURGER_SUCCESS, "id", "orderData")
export const purchaseBurgerFail = actionCreactor(actionTypes.PURCHASE_BURGER_FAIL, "error")


export const purchaseBurgerStart = () => {
    return ({
        type: actionTypes.PURCHASE_BURGER_START
    })
}

export const purchaseBurger = (orderData) => {
    return dispatch => {

        dispatch(purchaseBurgerStart());

        setTimeout(()=>{

            axios.post("/orders.json" , orderData)
            .then(resp=> {
                console.log("DATA", resp.data)
                console.log(purchaseBurgerSuccess(resp.data, orderData))
                dispatch(purchaseBurgerSuccess(resp.data.name, orderData))
            })
            .catch(error=> dispatch(purchaseBurgerFail(error)))

        },2000)


    }
}
