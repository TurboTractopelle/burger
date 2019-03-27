import * as actionTypes from "../actions/actionTypes"

const initialState= {
    ingredients: {}, 
    totalPrice: 4,
    fetchFailed:false
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

const reducer = (state = initialState, action) => {

switch(action.type){
    case actionTypes.ADD_INGREDIENT :  
        return {
            ...state, 
            ingredients:{...state.ingredients,
                        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                    },
            totalPrice : getTotalPrice(state.ingredients, action.ingredientName, "add")
        }
        case actionTypes.REMOVE_INGREDIENT :  
        return {
            ...state, 
            ingredients:{...state.ingredients,
                        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                    },
            totalPrice : getTotalPrice(state.ingredients, action.ingredientName, "remove")
        }

        case actionTypes.SET_INGREDIENTS : 
        return {
            ...state, 
            ingredients: {
                salad: action.ingredients.salad,
                bacon: action.ingredients.bacon,
                cheese: action.ingredients.cheese,                
                meat: action.ingredients.meat 
            },
            totalPrice: INGREDIENT_PRICES["base"]
        }

        case actionTypes.FETCH_FAILED : 
        console.log("inside reducer", action)
        return {
            ...state, 
            fetchFailed: action.msg
        }


    default : 
        return state
}

}

export default reducer