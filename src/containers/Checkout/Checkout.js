import React, { Component } from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
import {Route} from 'react-router-dom';
import ContactData from "./ContactData/ContactData"
import {connect} from "react-redux"

class Checkout extends Component {


onCheckoutCancelledHandler= ()=> {
    this.props.history.goBack()
}
onCheckoutContinueHandler = ()=>{
    this.props.history.push( this.props.match.path + "/contact-data");
}

render() {
    return (
        <div>
            <CheckoutSummary 
                ingredients={this.props.ingredients}
                totalPrice={this.props.totalPrice}
                onCheckoutCancelled={this.onCheckoutCancelledHandler}
                onCheckoutContinue={this.onCheckoutContinueHandler}/>
            <Route 
                path={this.props.match.path + "/contact-data"} 
                component={ContactData}
                />
        </div>
    );
}
}

const mapStateToProps= state =>{
    return({
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice
    })
}


export default connect(mapStateToProps)(Checkout);