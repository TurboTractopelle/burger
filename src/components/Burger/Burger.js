import React from 'react';
import classes from "./Burger.css"
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    // { salad: 1, bacon: 1, cheese: 2, meat: 2 }

    //const ItemIngredients = Object.keys(props.ingredients)
    // [ "salad", "bacon", "cheese", "meat" ]

    const modifiedIngredients = Object.keys(props.ingredients).reduce((a,k,i)=>{
        a = [...a, ...Array(props.ingredients[k]).fill(k)]
        return a
    },[])
    // [ "salad", "bacon", "cheese", "cheese", "meat", "meat" ]

    const msg = <p>Please select ingredients</p>
    const ingredients = modifiedIngredients.map((item,i)=>{
        return <BurgerIngredient type={item} key={item+i} />
    })

    const ingredientsDisplay = ingredients.length ? ingredients: msg
    
    return(
        <div className={classes.burger}>
        <BurgerIngredient type="bread-top" />
            { ingredientsDisplay }
        <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;