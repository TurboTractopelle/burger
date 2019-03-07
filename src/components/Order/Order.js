import React from 'react'
import classes from "./Order.css"

const Order = (props)=>{

    console.log(props.ingredients)
    // { bacon: 1, cheese: 0, meat: 1, salad: 5 }
    // [  [["bacon"], [1]],   ...  ]

    const modifiedIngredients = Object.entries(props.ingredients)

    return(
    <div className={classes.Order}>

            Ingredients: 
            <ul>
                {modifiedIngredients.map((k,i)=> <li key={i}><b>{k[0]}</b> ({k[1]})</li>)}
            </ul>
        

        <p>Price: <strong>{props.price}$</strong></p>
    </div>)
}

export default Order