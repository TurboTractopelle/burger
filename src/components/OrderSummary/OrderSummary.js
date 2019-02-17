import React from 'react';
import classes from './orderSummary.css'
import Aux from '../../hoc/Aux2'

const orderSummary =({ingredients})=> {

const ingredientSummary = Object.keys(ingredients).map((k)=>{
    return(
        <li key={k}>{k}: {ingredients[k]}</li>
    )
})



return (
        <Aux>
            <h3>Your order</h3>
            <p>buy this stuff</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    );
}

export default orderSummary;