import React from 'react';
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({adapter: new Adapter()})

import {BurgerBuilder} from "./BurgerBuilder"
import BuildControls from '../../components/BuildControls/BuildControls'

describe('BurgerBuilder tests', ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<BurgerBuilder  initIngredient={()=> {} } />)
    })

    it("should render buildControls when ing", ()=>{
        wrapper.setProps({ingredients: {salad:0}})
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })

})