import React, {Component} from 'react';
import Aux from '../../hoc/Aux2/Aux2'
import Button from '../UI/Button/Button'

class orderSummary extends Component {
//class just to test the lifecycle hook


render(){

console.log("orderSummary rendered")
  
const {ingredients, closeModal, purchaseContinue, price} = this.props
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
            <p><b>{price}$</b></p>            
            <Button btnType="Danger" clicked={closeModal}>CANCEL</Button>
            <Button btnType="Success" clicked={purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
}
}

export default orderSummary;