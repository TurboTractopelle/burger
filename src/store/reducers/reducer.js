import burgerBuilder from "./burgerBuilder"
import order from "./order"
import auth from "./auth"
import {combineReducers} from "redux"

const reducer = combineReducers({burgerBuilder, order, auth})

export default reducer