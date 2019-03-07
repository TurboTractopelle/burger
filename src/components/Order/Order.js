import React from 'react'
import classes from "./Order.css"

const Order = (props)=>{

    console.log(props)
    return(
    <div className={classes.Order}>
        <p>Ingredients: {props.ingredients}</p>
        <p>Price: <strong>{props.price}</strong></p>
    </div>)
}

export default Order