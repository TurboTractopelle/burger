import * as actionTypes from "../actions/actionTypes"

const initialState = {
    loading:false
}

const auth = (state = initialState, action)=>{

    switch (action.type) {
        case actionTypes.AUTH_START:
        return state
        
        default: return state

    }
}

export default auth