import * as actionTypes from "./actionTypes"


const actionCreactor = (type, ...autreArgs) => {
    return (...arg) => {
        const action = {type}
        autreArgs.map((item,i) => action[item] = arg[i] )
        return action
    }
}

export const authStart = actionCreactor(actionTypes.AUTH_SUCCESS)
export const authSuccess = actionCreactor(actionTypes.AUTH_SUCCESS, "data")
export const authFail = actionCreactor(actionTypes.AUTH_FAIL, "error")

export const auth = (email, password) => {
    return dispatch => {
        // magie 
        console.log("tentative de connexion")
        const data= {}
        dispatch(authSuccess(data))
    }
}