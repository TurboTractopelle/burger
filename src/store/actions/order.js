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

export const purchaseBurger = (orderData, token) => {
    return dispatch => {

        dispatch(purchaseBurgerStart());

        setTimeout(()=>{

            axios.post("/orders.json?auth=" + token , orderData)
            .then(resp=> {
                console.log("DATA", resp.data)
                dispatch(purchaseBurgerSuccess(resp.data.name, orderData))
            })
            .catch(error=> dispatch(purchaseBurgerFail(error)))

        },2000)


    }
}

export const purchaseInit = actionCreactor(actionTypes.PURCHASE_INIT)

export const fetchOrdersStart = actionCreactor(actionTypes.FETCH_ORDERS_START)
export const fetchOrdersSuccess = actionCreactor(actionTypes.FETCH_ORDERS_SUCCESS, "orders")
export const fetchOrdersFail = actionCreactor(actionTypes.FETCH_ORDERS_FAIL, "error")

export const fetchOrders = (token, userId)=> {

    return dispatch => {

    dispatch(fetchOrdersStart())

    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'

    axios.get("/orders.json" + queryParams)
    .then(res => {
        const fetchOrders = [];

        for (let key in res.data){
            fetchOrders.push( {...res.data[key], id:key} )
        }
        dispatch(fetchOrdersSuccess(fetchOrders))        

    })
    .catch(error => dispatch(fetchOrdersFail(error.message)))
    }

}

