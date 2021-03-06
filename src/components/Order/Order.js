import React from 'react'
import classes from "./Order.css"

const Order = (props)=>{

    //console.log(props.ingredients)
    // { bacon: 1, cheese: 0, meat: 1, salad: 5 }
    // [  [["bacon"], [1]],   ...  ]
    console.log(props)

    const modifiedIngredients = Object.entries(props.ingredients)
    console.log(modifiedIngredients)

    return(
    <div className={classes.Order}>
            <p>userId: {props.userId}</p>
            Ingredients: 
            <ul>
                {modifiedIngredients.map((k,i)=> <li key={i}><b>{k[0]}</b> ({k[1]})</li>)}
            </ul>
        

        <p>Price: <strong>{props.price}$</strong></p>
    </div>)
}

export default Order