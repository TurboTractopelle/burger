import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const CheckoutSummary =(props)=> {
return (
        <div className={classes.CheckoutSummary}>
            <h1>Eat well</h1>
            <div style={{width: "100%", margin: "0 auto"}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.onCheckoutCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.onCheckoutContinue}>Go</Button>
        </div>
    );
}

export default CheckoutSummary;