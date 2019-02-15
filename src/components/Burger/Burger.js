import React from 'react';
import classes from "./Burger.css"
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    console.log(props.ingredients)
    // { salad: 1, bacon: 1, cheese: 2, meat: 2 }

    //const ItemIngredients = Object.keys(props.ingredients)
    // [ "salad", "bacon", "cheese", "meat" ]

    const modifiedIngredients = Object.keys(props.ingredients).reduce((a,k,i)=>{
        a = [...a, ...Array(props.ingredients[k]).fill(k)]
        return a
    },[])
    // [ "salad", "bacon", "cheese", "cheese", "meat", "meat" ]
    
    return(
        <div className={classes.burger}>
        <BurgerIngredient type="bread-top" />
        {
            modifiedIngredients.map((item,i)=>{
            return <BurgerIngredient type={item} key={item+i} />
        })
        }
        <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;