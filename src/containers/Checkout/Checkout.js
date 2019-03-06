import React, { Component } from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"

class Checkout extends Component {
state ={
    ingredients:{
        salad:1,
        meat:1,
        cheese:1
    }
}

onCheckoutCancelledHandler= ()=> {
    this.props.history.goBack()
}
onCheckoutContinueHandler = ()=>{
    this.props.history.replace("/checkout/contact")
}

render() {
    return (
        <div>
            <CheckoutSummary ingredients={this.state.ingredients} onCheckoutCancelled={this.onCheckoutCancelledHandler} onCheckoutContinue={this.onCheckoutContinueHandler}/>
        </div>
    );
}
}

export default Checkout;