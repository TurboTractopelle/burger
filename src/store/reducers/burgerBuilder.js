import * as actionTypes from "../actions/actionTypes"

const initialState= {
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0,
    }, 
    totalPrice: 4
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
    default : 
        return state
}

}

export default reducer