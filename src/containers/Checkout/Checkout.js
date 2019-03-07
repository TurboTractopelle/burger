import React, { Component } from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
import {Route} from 'react-router-dom';
import ContactData from "./ContactData/ContactData"

class Checkout extends Component {
state ={
    ingredients:{}
}

componentDidMount(){
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    for (let param of query.entries()){
        // [ "salad", "0" ]
        ingredients[param[0]] = param[1]
    }
    this.setState({ingredients: ingredients})
}

onCheckoutCancelledHandler= ()=> {
    this.props.history.goBack()
}
onCheckoutContinueHandler = ()=>{
    this.props.history.replace("/checkout/contact-data")
}

render() {
    return (
        <div>
            <CheckoutSummary ingredients={this.state.ingredients} onCheckoutCancelled={this.onCheckoutCancelledHandler} onCheckoutContinue={this.onCheckoutContinueHandler}/>
            <Route path={this.props.match.path + "/contact-data"} component={ContactData} />
        </div>
    );
}
}

export default Checkout;