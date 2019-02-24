import React, {Component} from 'react';
import Aux from '../../hoc/Aux2/Aux2'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from "../../axios-order"

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
        purchasable : false,
        purchasing:false,
        loading:false
    }

    purchaseContinue = () => {

        this.setState(prevState=>({...prevState, loading:true}))

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name : "bob",
                expedition: "fast"
            } 
        }

        setTimeout(()=>{
            axios.post("/orders.json" , order)
            .then(resp=> {
                console.log(resp)
                this.setState(prevState=>({...prevState, loading:false, purchasing:false}))
            })
        },1000)

    }

    closeModal = ()=>{
        console.log("click")
        this.setState({purchasing:false})
    }
    
    purchasingHandler= ()=>{
        this.setState({purchasing:true})
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
            return value === 0 
                ? {...prevState}
                : {...prevState, ingredients:{...prevState.ingredients, [type]:prevState.ingredients[type]-1}, totalPrice: Math.round((prevState.totalPrice - INGREDIENT_PRICES[type])*100)/100, purchasable:newsPurchasable}
        })

    }

    render(){
        const {ingredients} = this.state
        const disabledInfo = Object.keys(ingredients).reduce((a,k)=>{
            return a = ingredients[k] === 0 ? { ...a, [k]: true } : { ...a, [k]: false }
          }, {})
        
        console.log("state loading: ", this.state.loading)
    return(
            <Aux>
                <Modal testShow={this.state.purchasing} closeModal={this.closeModal}  >
                    <OrderSummary ingredients={ingredients} closeModal={this.closeModal} purchaseContinue={this.purchaseContinue} price={this.state.totalPrice} loading={this.state.loading} />
                </Modal>
                <Burger ingredients={ingredients} />
                <BuildControls addIngredientHandler={this.addIngredientHandler} removeIngredientHandler={this.removeIngredientHandler} disabledInfo={disabledInfo} price={this.state.totalPrice} purchasable={this.state.purchasable} purchasingHandler={this.purchasingHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;