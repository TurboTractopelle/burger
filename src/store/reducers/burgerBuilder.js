import * as actionTypes from "../actions/actionTypes"
import {updateObject} from "./utility"

const initialState= {
    ingredients: {}, 
    totalPrice: 4,
    fetchFailed:false,
    building: false,
    authRedirectPath: "/"
}

const INGREDIENT_PRICES= {
    salad :0.3,
    bacon :0.5,
    cheese :1,
    meat :2,
    base : 4
}

/*Math.round((prevState.totalPrice - INGREDIENT_PRICES[type])*100)/100*/
const getTotalPrice = (ingredients, ingredient, action)=>{
    let value = INGREDIENT_PRICES["base"]

    for(let ing in ingredients){
        value += INGREDIENT_PRICES[ing] * ingredients[ing]
    }
    const op = action === "add" ? 1 : -1
    value = value + INGREDIENT_PRICES[ingredient] * op

    return value
}

const addIngredient = (state,action) => {
        // exemple avec utility function 
        const newIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
        const newIngredients = updateObject(state.ingredients, newIngredient)
        const newState = {
            ingredients : newIngredients,
            totalPrice : getTotalPrice(state.ingredients, action.ingredientName, "add"),
            building: true
        }
        return updateObject(state, newState)
}

const removeIngredient= (state,action)=>{
    return {
        ...state, 
        ingredients:{...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
        totalPrice : getTotalPrice(state.ingredients, action.ingredientName, "remove"),
        building: true        
    }
}

const setIngredients = (state,action)=>{
    return {
        ...state, 
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,                
            meat: action.ingredients.meat 
        },
        totalPrice: INGREDIENT_PRICES["base"],
        building: false        
    }
}


const reducer = (state = initialState, action) => {

switch(action.type){
    case actionTypes.ADD_INGREDIENT : return addIngredient(state,action)
    case actionTypes.REMOVE_INGREDIENT : return removeIngredient(state,action) 
    case actionTypes.SET_INGREDIENTS : return setIngredients(state,action)
    case actionTypes.FETCH_FAILED : return updateObject(state, {fetchFailed: action.msg})
    default : return state
}

}

export default reducer