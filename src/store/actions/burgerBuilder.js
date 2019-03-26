import * as actionTypes from "./actionTypes"
import axios from "axios";

const actionCreactor = (type, ...autreArgs) => {
    return (...arg) => {
        const action = {type}
        autreArgs.map((item,i) => action[item] = arg[i] )
        return action
    }
}

export const addIngredient = actionCreactor(actionTypes.ADD_INGREDIENT, "ingredientName")
export const removeIngredient = actionCreactor(actionTypes.REMOVE_INGREDIENT, "ingredientName")
export const setIngredients = actionCreactor(actionTypes.SET_INGREDIENTS, "ingredients")
export const fetchFailed = actionCreactor(actionTypes.FETCH_FAILED, "msg")

// thunk donc dispatch
export const initIngredient = ()=> {
    return dispatch => {
        axios.get("https://burger-0219.firebaseio.com/ingredients.json")
            .then(res => {
                dispatch(setIngredients(res.data))
            })
            .catch(error => {
                dispatch(fetchFailed("Failed fetch"))
            })
    }
}