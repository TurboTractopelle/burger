import * as actionTypes from "./actionTypes"
import axios from "axios"

const actionCreactor = (type, ...autreArgs) => {
    return (...arg) => {
        const action = {type}
        autreArgs.map((item,i) => action[item] = arg[i] )
        return action
    }
}

export const authStart = actionCreactor(actionTypes.AUTH_START)
export const authSuccess = actionCreactor(actionTypes.AUTH_SUCCESS, "idToken", "userId")
export const authFail = actionCreactor(actionTypes.AUTH_FAIL, "error")

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart()) // déclenche loader
        
        const authData = {email, password, returnSecureToken: true} //
        let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBQPz7UZoAUosQIFutJpkDXKsfoa_LYpKc"
        if(!isSignUp){
            url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBQPz7UZoAUosQIFutJpkDXKsfoa_LYpKc"
        }

        axios.post(url, authData)
            .then(res => dispatch(authSuccess(res.data.idToken, res.data.localId)))
            .catch(error =>  dispatch(authFail(error.response.data.error.message)))

    }
}