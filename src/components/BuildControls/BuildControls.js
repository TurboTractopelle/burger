import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls=[
    {label: "Salad", type:"salad"},
    {label: "Bacon", type:"bacon"},
    {label: "Cheese", type:"cheese"},
    {label: "Meat", type:"meat"},
]

const BuildControls = (props) => {

     return(
        <div className={classes.buildControls}>
            <p className={classes.price}>{props.price} $</p>
            {controls.map(control=>{
                return <BuildControl label={control.label} key={control.type} addIngredientHandler={props.addIngredientHandler(control.type)} removeIngredientHandler={props.removeIngredientHandler(control.type)} disabledInfo={props.disabledInfo[control.type]} />
            })}
            <button disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls

