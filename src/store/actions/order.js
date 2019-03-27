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

export const purchaseInit = actionCreactor(actionTypes.PURCHASE_INIT)

export const fetchOrdersStart = actionCreactor(actionTypes.FETCH_ORDERS_START)
export const fetchOrdersSuccess = actionCreactor(actionTypes.FETCH_ORDERS_SUCCESS, "orders")
export const fetchOrdersFail = actionCreactor(actionTypes.FETCH_ORDERS_FAIL, "error")

export const fetchOrders = ()=> {

    return dispatch => {

    dispatch(fetchOrdersStart())

    axios.get("/orders.json")
    .then(res => {
        const fetchOrders = [];

        for (let key in res.data){
            fetchOrders.push( {...res.data[key], id:key} )
        }
        dispatch(fetchOrdersSuccess(fetchOrders))        

    })
    .catch(error => fetchOrdersFail(error))
    }

}

