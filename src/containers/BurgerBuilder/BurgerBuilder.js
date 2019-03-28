import React, {Component} from 'react';
import Aux from '../../hoc/Aux2/Aux2'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from "../../axios-order"
import {connect} from "react-redux"
import * as actions from "../../store/actions/burgerBuilder"
import {setAuthRedirectPath} from "../../store/actions/auth"


class BurgerBuilder extends Component{

    state ={
        purchasable : false,
        purchasing:false,
        loading:false
    }

    componentDidMount(){
        this.props.initIngredient()
    }

    updatePurchaseState =(ingredients) => {
        const sum = Object.keys(ingredients)
            .map( key => ingredients[key])
            .reduce((acc,k)=> acc + k,0)
        return sum > 0
    }

    purchaseContinue = () => {
        this.props.history.push("/checkout")
    }

    closeModal = ()=>{
        this.setState({purchasing:false})
    }
    
    purchasingHandler= ()=>{
        this.props.isAuthenticated 
        ? this.setState({purchasing:true})
        : this.props.history.push("/auth")
    }


    render(){

        const {ingredients} = this.props
        

        const disabledInfo = Object.keys(ingredients).reduce((a,k)=>{
            return a = ingredients[k] === 0 ? { ...a, [k]: true } : { ...a, [k]: false }
          }, {})
       

    return(
        <Aux>
            {this.props.fetchFailed && <p style={{textAlign:"center"}}>{this.props.fetchFailed}</p> }
        <Modal testShow={this.state.purchasing} closeModal={this.closeModal}  >
            <OrderSummary ingredients={ingredients} closeModal={this.closeModal} purchaseContinue={this.purchaseContinue} price={this.props.totalPrice} loading={this.state.loading} />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
            isAuthenticated={this.props.isAuthenticated}
            addIngredientHandler={this.props.onIngredientAdded}
            removeIngredientHandler={this.props.onIngredientRemoved}
            disabledInfo={disabledInfo}
            price={this.props.totalPrice}
            purchasable={this.updatePurchaseState(this.props.ingredients)}
            purchasingHandler={this.purchasingHandler}
            />
    </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        ingredients : state.burgerBuilder.ingredients,
        totalPrice : state.burgerBuilder.totalPrice,
        fetchFailed : state.burgerBuilder.fetchFailed,
        isAuthenticated : state.auth.token !== null
    })
}


const mapDispatchToProps = (dispatch) => {
    return({
        onIngredientAdded: (ingredientName) => ()=> dispatch(actions.addIngredient(ingredientName)),
        onIngredientRemoved: (ingredientName) => ()=> dispatch(actions.removeIngredient(ingredientName)),
        initIngredient: () => dispatch(actions.initIngredient()),
        setAuthRedirectPath: () => dispatch(setAuthRedirectPath())
    })
}


export default  connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))