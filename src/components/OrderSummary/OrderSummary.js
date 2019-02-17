import React from 'react';
import classes from './orderSummary.css'
import Aux from '../../hoc/Aux2'
import Button from '../UI/Button/Button'

const orderSummary =({ingredients, closeModal, purchaseContinue})=> {

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
            <Button btnType="Danger" clicked={closeModal}>CANCEL</Button>
            <Button btnType="Success" clicked={purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;