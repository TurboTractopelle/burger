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

    let actionSucess = {type: actionTypes.AUTH_SUCCESS, idToken: "token", userId : "userId"}

    it('get initial state', ()=>{
        expect(reducer(undefined,{})).toEqual(initialState)
    })

    it("should store token on login", ()=>{
        expect(reducer(initialState, actionSucess).token).toBe("token")
    })

    it("should store toke + userId", ()=>{
        expect(   reducer(initialState, actionSucess)).toEqual(
            {loading:false,
            token:"token",
            userId:"userId",
            error:null})
    })


})