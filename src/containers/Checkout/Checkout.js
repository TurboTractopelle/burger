import React, { Component } from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
import {Route, Redirect} from 'react-router-dom';
import ContactData from "./ContactData/ContactData"
import {connect} from "react-redux"
import * as actions from "../../store/actions/order"

class Checkout extends Component {

componentWillMount(){
    this.props.purchaseInit()
}

onCheckoutCancelledHandler= ()=> {
    this.props.history.goBack()
}
onCheckoutContinueHandler = ()=>{
    this.props.history.push( this.props.match.path + "/contact-data");
}

render() {

    const purchasedRedirect = this.props.purchased && <Redirect to="/" />
    console.log(purchasedRedirect)

    let summary = (<div>
        <CheckoutSummary 
        ingredients={this.props.ingredients}
        totalPrice={this.props.totalPrice}
        onCheckoutCancelled={this.onCheckoutCancelledHandler}
        onCheckoutContinue={this.onCheckoutContinueHandler}/>
        <Route 
        path={this.props.match.path + "/contact-data"} 
        component={ContactData}
        /></div>)

    if(Object.entries(this.props.ingredients).length === 0){
        summary = <Redirect to="/" />
    } 


    return (
        <div>
            {summary}
            {purchasedRedirect}
        </div>
    );
}
}

const mapStateToProps= state =>{
    return({
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        purchased : state.order.purchased
    })
}

const dispatchToProps = dispatch => {
    return({
        purchaseInit: ()=>dispatch(actions.purchaseInit())
    })
}


export default connect(mapStateToProps, dispatchToProps)(Checkout);