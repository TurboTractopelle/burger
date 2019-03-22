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
            <CheckoutSummary ingredients={this.props.ingredients} onCheckoutCancelled={this.onCheckoutCancelledHandler} onCheckoutContinue={this.onCheckoutContinueHandler}/>
            <Route 
                path={this.props.match.path + "/contact-data"} 
                render={(props)=>(<ContactData {...this.props} />)}
                />
        </div>
    );
}
}

const mapStateToProps= state =>{
    return({
        ingredients: state.ingredients
    })
}


export default connect(mapStateToProps)(Checkout);