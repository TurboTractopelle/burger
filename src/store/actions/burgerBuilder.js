import * as actionTypes from "./actionTypes"

const actionCreactor = (type, ...autreArgs) => {
    return (...arg) => {
        const action = {type}
        autreArgs.map((item,i) => action[item] = arg[i] )
        return action
    }
}

export const addIngredient = actionCreactor(actionTypes.ADD_INGREDIENT, "ingredientName")
export const removeIngredient = actionCreactor(actionTypes.REMOVE_INGREDIENT, "ingredientName")