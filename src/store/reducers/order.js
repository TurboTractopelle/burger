import * as actionTypes from "../actions/actionTypes"


const initialState = {
    orders: [],
    loading:false,
    purchased:false,
    error: false
}

const reducer = (state = initialState, action) => {

    console.log("ACTION", action)

    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS:
        const newOrder = {
            ...action.orderData,
            id : action.id
        }
        return {...state, loading:false, purchased:true, orders: state.orders.concat(newOrder)}

        case actionTypes.PURCHASE_BURGER_FAIL:
        return {...state, loading:false, error:true}

        case actionTypes.PURCHASE_BURGER_START:
        return {...state, loading:true}   
        
        case actionTypes.PURCHASE_INIT:
        return {...state, purchased:false}  

        case actionTypes.FETCH_ORDERS_START:
        return {...state, loading:true, error:false}

        case actionTypes.FETCH_ORDERS_SUCCESS:
        return {...state, loading:false, orders: action.orders}       

        case actionTypes.FETCH_ORDERS_FAIL:
        console.log( action.error )
        return {...state, loading:false, error: action.error}        
    
        default:
        return {...state}
    }

}

export default reducer