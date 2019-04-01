import React from 'react';
import reducer from "./auth" // default can ne renamed
import * as actionTypes from "../actions/actionTypes"

describe("auth reducer", ()=>{

    const initialState = {
        loading:false,
        token:null,
        userId:null,
        error:null
    }

    it('get initial state', ()=>{
        expect(reducer(undefined,{})).toEqual(initialState)
    })

    it("should store token on login", ()=>{
        let action = {type: actionTypes.AUTH_SUCCESS, idToken: "token"}
        expect(reducer(initialState, action).token).toBe("token")
    })

})