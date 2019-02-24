import React, {Component} from 'react';
import Aux from '../../hoc/Aux2/Aux2'
import Button from '../UI/Button/Button'
import Spinner from '../UI/Spinner/Spinner'

class orderSummary extends Component {
//class just to test the lifecycle hook


render(){

  
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

            {this.props.loading ? <Spinner /> : null}

            <Button btnType="Danger" clicked={closeModal}>CANCEL</Button>
            <Button btnType="Success" clicked={purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
}
}

export default orderSummary;