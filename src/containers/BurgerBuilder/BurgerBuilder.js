import React, {Component} from 'react';
import Aux from '../../hoc/Aux2'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'

const INGREDIENT_PRICES= {
    salad :0.3,
    bacon :0.5,
    cheese :1,
    meat :2,
    base : 4
}

class BurgerBuilder extends Component{

    state ={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }, 
        totalPrice: INGREDIENT_PRICES["base"],
        purchasable : false
    }

    addIngredientHandler = (type)=>()=>{
        this.setState(prevState=>{
            return {...prevState, ingredients:{...prevState.ingredients, [type]:prevState.ingredients[type]+1}, totalPrice: Math.round((prevState.totalPrice + INGREDIENT_PRICES[type])*100)/100, purchasable:true}
        })
    }

    removeIngredientHandler = (type)=>()=>{
        this.setState(prevState=>{

            const sumPurchasable = Object.keys(prevState.ingredients).reduce((a,k)=>{
                return a + prevState.ingredients[k]
            },0)

            const newsPurchasable = !(sumPurchasable === 1 && prevState.ingredients[type]===1)         

            const value = prevState.ingredients[type]
            return value == 0 
                ? {...prevState}
                : {...prevState, ingredients:{...prevState.ingredients, [type]:prevState.ingredients[type]-1}, totalPrice: Math.round((prevState.totalPrice - INGREDIENT_PRICES[type])*100)/100, purchasable:newsPurchasable}
        })

    }

    render(){
        const {ingredients} = this.state
        const disabledInfo = Object.keys(ingredients).reduce((a,k)=>{
            return a = ingredients[k] === 0 ? { ...a, [k]: true } : { ...a, [k]: false }
          }, {})
        
    return(
            <Aux>
                <Burger ingredients={ingredients} />
                <BuildControls addIngredientHandler={this.addIngredientHandler} removeIngredientHandler={this.removeIngredientHandler} disabledInfo={disabledInfo} price={this.state.totalPrice} purchasable={this.state.purchasable} />
            </Aux>
        )
    }
}

export default BurgerBuilder;