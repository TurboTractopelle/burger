import React, {Component} from 'react';
import Aux from '../../hoc/Aux2/Aux2'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from "../../axios-order"
import {connect} from "react-redux"
import * as actionsTypes from "../../store/actionsTypes"



class BurgerBuilder extends Component{

    state ={
        purchasable : false,
        purchasing:false,
        loading:false
    }

    purchaseContinue = () => {

        const query = [];
        for(let item in this.props.ingredients){
            query.push(encodeURIComponent(item) + "=" + this.props.ingredients[item])
        }
        this.props.history.push({
            pathname : "/checkout",
            search: query.join("&")
        });

    }

    closeModal = ()=>{
        console.log("click")
        this.setState({purchasing:false})
    }
    
    purchasingHandler= ()=>{
        this.setState({purchasing:true})
    }


    render(){
        const {ingredients} = this.props

        const disabledInfo = Object.keys(ingredients).reduce((a,k)=>{
            return a = ingredients[k] === 0 ? { ...a, [k]: true } : { ...a, [k]: false }
          }, {})
       

    return(
            <Aux>
                <Modal testShow={this.state.purchasing} closeModal={this.closeModal}  >
                    <OrderSummary ingredients={ingredients} closeModal={this.closeModal} purchaseContinue={this.purchaseContinue} price={this.state.totalPrice} loading={this.state.loading} />
                </Modal>
                <Burger ingredients={ingredients} />
                <BuildControls
                    addIngredientHandler={this.props.onIngredientAdded}
                    removeIngredientHandler={this.props.onIngredientRemoved}
                    disabledInfo={disabledInfo}
                    price={this.props.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasingHandler={this.purchasingHandler}/>
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        ingredients : state.ingredients,
        totalPrice : state.totalPrice
    })
}


const mapDispatchToProps = (dispatch) => {
    return({
        onIngredientAdded: (ingredientName) => ()=> dispatch({type:actionsTypes.ADD_INGREDIENT, ingredientName}),
        onIngredientRemoved: (ingredientName) => ()=> dispatch({type:actionsTypes.REMOVE_INGREDIENT, ingredientName})        
    })
}


export default  connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))