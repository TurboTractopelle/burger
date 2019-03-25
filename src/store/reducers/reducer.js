import burgerBuilder from "./burgerBuilder"
import order from "./order"
import {combineReducers} from "redux"

const reducer = combineReducers({burgerBuilder, order})

export default reducer