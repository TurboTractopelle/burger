import React from 'react';
import NavigationItems from './NavigationItems'
import NavigationItem from "./NavigationItem/NavigationItem"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({adapter: new Adapter()})


describe('Navigation test', ()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<NavigationItems />)
    })

    it("should render two NavigationItem if !auth", ()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })
    it("should render three NavigationItem if auth", ()=>{
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })
    it("should display logout if auth", ()=>{
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toBeTruthy()
    })

})